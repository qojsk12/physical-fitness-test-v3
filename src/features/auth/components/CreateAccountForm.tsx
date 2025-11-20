import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { Error, Form, Input } from "../../../styles/AuthComponents";

// 여기 추가!
interface CreateAccountFormProps {
  onSuccess: () => void;
}

// 여기 수정: Props 타입 명시
export default function CreateAccountForm({
  onSuccess,
}: CreateAccountFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
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
      <Input type="submit" value={isLoading ? " Loading..." : "회원가입"} />
      {error && <Error style={{ color: "#ef4444" }}>{error}</Error>}
    </Form>
  );
}
