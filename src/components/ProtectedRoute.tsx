import {Navigate, useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import {useEffect} from 'react';
import {signOut} from 'firebase/auth';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      signOut(auth).then(() => {
        navigate('/login');
      });
    }, 43200000);
  }, [navigate]);

  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
