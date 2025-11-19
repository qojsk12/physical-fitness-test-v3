import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CreateAccountForm from "../components/CreateAccountForm";
import GitHubButton from "../components/GitHubButton";

const Wrapper = styled.div`
  min-height: 100vh;
  background: #111827;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 420px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 50px;
`;

export default function CreateAccountPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Box>
        <Title>회원가입</Title>
        <CreateAccountForm onSuccess={() => navigate("/")} />
        <p style={{ marginTop: "20px" }}>
          이미 계정이 있으신가요?{" "}
          <Link to="/login" style={{ color: "#60a5fa" }}>
            로그인 →
          </Link>
        </p>
        <GitHubButton />
      </Box>
    </Wrapper>
  );
}
