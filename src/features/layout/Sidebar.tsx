
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase/config";

const Container = styled.aside`
  background: #1f2937;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  text-align: left;
  cursor: pointer;
  padding: 0.5rem 0;
`;

export default function Sidebar() {
  const navigate = useNavigate();

  const onLogOut = async () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      await auth.signOut();
      navigate("/login");
    }
  };

  return (
    <Container>
      <Menu>
        <MenuItem onClick={() => navigate("/")}>🏠 홈</MenuItem>
        <MenuItem onClick={onLogOut}>🚪 로그아웃</MenuItem>
      </Menu>
    </Container>
  );
}