import { Outlet } from "react-router-dom";
import styled from "styled-components";
import img from '../image/'

const Wrapper = styled.div`
  background-color: tomato;
  height: 100vh;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header>
        <img src="" alt="" />
      </Header>
      <Outlet />
    </Wrapper>
  );
}
