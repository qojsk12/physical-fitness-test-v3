import { useNavigate, Link } from "react-router-dom";
import CreateAccountForm from "../components/CreateAccountForm";
import GitHubButton from "../components/GitHubButton";
import { Box, Switcher, Title, Wrapper } from "../../../styles/AuthComponents";

export default function CreateAccountPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Box>
        <Title>회원가입</Title>
        <CreateAccountForm onSuccess={() => navigate("/")} />
        <Switcher>
          이미 계정이 있으신가요?{" "}
          <Link to="/login" style={{ color: "#60a5fa" }}>
            로그인 →
          </Link>
        </Switcher>
        <GitHubButton />
      </Box>
    </Wrapper>
  );
}
