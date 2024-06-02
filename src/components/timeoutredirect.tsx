import { useEffect, useRef, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface TimeoutRedirectProps {
  timeout?: number;
  children?: ReactNode;
}

export default function TimeoutRedirect({
  timeout = 5000,
  children,
}: TimeoutRedirectProps) {
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      navigate("/");
    }, timeout);
  };

  useEffect(() => {
    const handleActivity = () => {
      resetTimer();
    };

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);

    resetTimer(); // 컴포넌트가 마운트될 때 타이머를 설정합니다.

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
    };
  }, [navigate, timeout]);

  return <>{children}</>;
}
