import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import styled from "styled-components";
import { auth } from "../../../firebase/config";

// 여기 추가!
interface CreateAccountFormProps {
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
export default function CreateAccountForm({
  onSuccess,
}: CreateAccountFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    setLoading(true);
    try {
      const creds = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(creds.user, { displayName: name });
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
        required
      />
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
      <Submit disabled={loading}>{loading ? "가입 중..." : "회원가입"}</Submit>
      {error && <p style={{ color: "#ef4444" }}>{error}</p>}
    </Form>
  );
}
