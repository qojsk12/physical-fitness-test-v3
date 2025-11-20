import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import GitHubButton from "../components/GitHubButton";
import {
  Box,
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../../../styles/AuthComponents";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Box>
        <Title>로그인</Title>
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
          <Input type="submit" value={isLoading ? " Loading..." : "로그인"} />
        </Form>
        {error && <Error>{error}</Error>}
        <Switcher>
          계정이 없으신가요? <Link to="/create-account">회원가입</Link>
        </Switcher>
        <GitHubButton />
      </Box>
    </Wrapper>
  );
}
