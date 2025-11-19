import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import GitHubButton from "../components/GitHubButton";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2937;
  color: white;
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <div>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="이메일"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
            required
          />
          <button type="submit">로그인</button>
        </form>
        {error && <p>{error}</p>}
        <p>
          계정이 없으신가요? <Link to="/create-account">회원가입</Link>
        </p>
        <GitHubButton />
      </div>
    </Wrapper>
  );
}
