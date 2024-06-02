import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import TimeoutRedirect from "./timeoutredirect";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content;
  height: 100vh;
`;

const Menu = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

const MenuItem = styled.div``;

export default function Layout() {
  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <MenuItem>home</MenuItem>
        </Link>
        <Link to="/profile">
          <MenuItem>체력측정</MenuItem>
        </Link>
      </Menu>
      <TimeoutRedirect>
        <Outlet />
      </TimeoutRedirect>
    </Wrapper>
  );
}
