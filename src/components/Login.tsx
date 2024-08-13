import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FirebaseError} from 'firebase/app';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import {Center, Error, Form, Input, Title, Wrapper} from './AuthComponents';

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const resetTimeout = () => {
  //   if (timeoutId) {
  //     clearTimeout(timeoutId);
  //   }
  //   // 30분 후 자동 로그아웃 설정 (1800000 밀리초)
  //   const id = setTimeout(() => {
  //     signOut(auth).then(() => {
  //       navigate("/login"); // 자동 로그아웃 후 로그인 페이지로 리다이렉트
  //     });
  //   }, 1800000);
  //   setTimeoutId(id);
  // };

  // // 사용자 활동 감지 및 타이머 리셋
  // useEffect(() => {
  //   const handleActivity = () => {
  //     resetTimeout(); // 사용자 활동 시 타이머 리셋
  //   };

  //   window.addEventListener("mousemove", handleActivity);
  //   window.addEventListener("keypress", handleActivity);

  //   return () => {
  //     window.removeEventListener("mousemove", handleActivity);
  //     window.removeEventListener("keypress", handleActivity);
  //   };
  // }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {name, value},
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (isLoading || email === '' || password === '') return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center>
      <Wrapper>
        <Title>로그인 페이지</Title>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            name="email"
            value={email}
            placeholder="이메일"
            type="email"
            required
          />
          <Input
            onChange={onChange}
            name="password"
            value={password}
            placeholder="비밀번호"
            type="password"
            required
          />
          <Input type="submit" value={isLoading ? 'Loading...' : '완료'} />
        </Form>
        {error !== '' ? <Error>{error}</Error> : null}
      </Wrapper>
    </Center>
  );
}
