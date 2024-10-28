import {useEffect, useState, ReactNode} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import {onAuthStateChanged, signOut} from 'firebase/auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({children}: ProtectedRouteProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let tokenCheckInterval: ReturnType<typeof setInterval> | undefined;

    const checkTokenExpiry = async () => {
      if (auth.currentUser) {
        try {
          const tokenResult = await auth.currentUser.getIdToken(true);
          if (tokenResult === null) {
            await signOut(auth);
            navigate('/login');
          }
        } catch (error) {
          console.error('Token refresh failed', error);
          await signOut(auth);
          navigate('/login');
        }
      }
    };

    const setupLogoutTimer = () => {
      timeoutId = setTimeout(async () => {
        await signOut(auth);
        navigate('/login');
      }, 28800000); // 8 hours in milliseconds

      tokenCheckInterval = setInterval(checkTokenExpiry, 3600000); // Check every hour
    };

    const handleTabClose = async (event: PageTransitionEvent) => {
      // If event.persisted is false, it means the user is navigating away or closing the tab, not just reloading
      if (!event.persisted && auth.currentUser) {
        await signOut(auth);
      }
    };

    // Listen for the pagehide event to sign out when the tab is closed, but not on refresh
    window.addEventListener('pagehide', handleTabClose);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setupLogoutTimer();
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        if (tokenCheckInterval) clearInterval(tokenCheckInterval);
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (tokenCheckInterval) clearInterval(tokenCheckInterval);
      window.removeEventListener('pagehide', handleTabClose);
      unsubscribe();
    };
  }, [navigate]);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
