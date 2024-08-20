// import React, {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import {FirebaseError} from 'firebase/app';
// import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
// import {auth} from '../firebase';
// import {Center, Error, Form, Input, Title, Wrapper} from './AuthComponents';

// export default function LogIn() {
//   const navigate = useNavigate();
//   const [isLoading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // 12시간 후 자동 로그아웃 설정 (43200000 밀리초)
//     const id = setTimeout(() => {
//       signOut(auth).then(() => {
//         navigate('/login'); // 자동 로그아웃 후 로그인 페이지로 리다이렉트
//       });
//     }, 43200000); // 12시간

//     // 컴포넌트 언마운트 시 타이머 해제
//     return () => clearTimeout(id);
//   }, [navigate]); // 이 useEffect는 로그인 후에만 실행됩니다.

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       target: {name, value},
//     } = e;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     if (isLoading || email === '' || password === '') return;
//     try {
//       setLoading(true);
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/'); // 로그인 성공 후 메인 페이지로 이동
//     } catch (e) {
//       if (e instanceof FirebaseError) {
//         setError(e.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Center>
//       <Wrapper>
//         <Title>로그인 페이지</Title>
//         <Form onSubmit={onSubmit}>
//           <Input
//             onChange={onChange}
//             name="email"
//             value={email}
//             placeholder="이메일"
//             type="email"
//             required
//           />
//           <Input
//             onChange={onChange}
//             name="password"
//             value={password}
//             placeholder="비밀번호"
//             type="password"
//             required
//           />
//           <Input type="submit" value={isLoading ? 'Loading...' : '완료'} />
//         </Form>
//         {error !== '' ? <Error>{error}</Error> : null}
//       </Wrapper>
//     </Center>
//   );
// }

import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FirebaseError} from 'firebase/app';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth, firestore} from '../firebase';
import {Center, Error, Form, Input, Title, Wrapper} from './AuthComponents';
import {doc, getDoc, setDoc} from 'firebase/firestore';

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const id = setTimeout(() => {
      signOut(auth).then(() => {
        navigate('/login');
      });
    }, 43200000); // 12시간

    return () => clearTimeout(id);
  }, [navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
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

      // 여기서 Firestore를 사용하여 중복 로그인 방지 로직을 추가할 수 있습니다.
      const userDocRef = doc(firestore, 'users', email); // 사용자 문서 참조
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists() && userDoc.data().isLoggedIn) {
        await signOut(auth); // 기존 세션 로그아웃
      }

      await signInWithEmailAndPassword(auth, email, password);
      await setDoc(userDocRef, {isLoggedIn: true}); // 로그인 상태 업데이트

      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message); // Firebase 오류 메시지 설정
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
          <Input
            type="submit"
            value={isLoading ? 'Loading...' : '완료'}
            disabled={isLoading}
          />
        </Form>
        {error !== '' && <Error>{error}</Error>}
      </Wrapper>
    </Center>
  );
}
