import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user: auth.currentUser, isLoading };
};
