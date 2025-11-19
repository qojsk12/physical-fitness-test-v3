import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import styled from "styled-components";
import { auth } from "../../../firebase/config";

// 여기 추가!
interface LoginFormProps {
  onSuccess: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 14px 20px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
`;

const Submit = styled.button`
  padding: 14px;
  border-radius: 50px;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

// 여기 수정: Props 타입 명시
export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="이메일"
        required
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호"
        required
      />
      <Submit type="submit" disabled={loading}>
        {loading ? "로그인 중..." : "로그인"}
      </Submit>
      {error && <p style={{ color: "#ef4444" }}>{error}</p>}
    </Form>
  );
}
