import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeoutRedirect from "./timeoutredirect";
import { auth } from "../firebase";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 15fr;
  min-height: 100vh;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 3px -7px 10px 10px #898888;
  position: relative;
  a {
    text-decoration: none;
    color: #000;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.span`
  display: block;
  cursor: pointer;
  font-size: 12px;
  svg {
    width: 40px;
    fill: #000;
    &:hover {
      fill: #00d0ff;
    }
  }
  &.log-out {
    position: absolute;
    right: 50px;
    svg {
      width: 30px;
      fill: #d90101;
      &:hover {
        fill: #00d0ff;
      }
    }
  }
`;

export default function Layout() {
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <MenuItem>
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              ></path>
            </svg>
          </MenuItem>
        </Link>
        <Link to="/physical">
          <MenuItem>
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              ></path>
            </svg>
          </MenuItem>
        </Link>
        <MenuItem onClick={onLogOut} className="log-out">
          <svg
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
            ></path>
          </svg>
        </MenuItem>
      </Menu>
      <Main>
        <TimeoutRedirect>
          <Outlet />
        </TimeoutRedirect>
      </Main>
    </Wrapper>
  );
}
