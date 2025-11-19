import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  height: 100vh;
  background: #f3f4f6;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}