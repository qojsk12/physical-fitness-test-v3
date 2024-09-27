import {Link, Outlet, useNavigate, useLocation} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import TimeoutRedirect from './timeoutredirect';
import {auth} from '../firebase';
import SidebarModal from './SidebarModal';

interface MenuItemProps {
  isActive?: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 15fr;
  min-height: 100vh;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({isActive}) => (isActive ? '#e0f7fa' : 'transparent')};

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    width: 40px;
    height: 40px;
    fill: ${({isActive}) => (isActive ? '#001aff' : '#000')};
  }

  &.log-out {
    margin-top: auto;
    svg {
      fill: #d90101;
    }
  }
`;

const Des = styled.div<{isActive?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;
  margin: 0 auto;
  color: ${({isActive}) => (isActive ? '#001aff' : '#000')};
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // 현재 URL을 가져옴
  const navigate = useNavigate();

  const onLogOut = async () => {
    const ok = confirm('로그아웃 하시겠습니까?');
    if (ok) {
      await auth.signOut();
      navigate('/login');
    }
  };

  return (
    <Wrapper>
      <Menu>
        <HamburgerIcon onClick={() => setIsSidebarOpen(true)}>
          <svg
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            ></path>
          </svg>
        </HamburgerIcon>
      </Menu>

      <SidebarModal
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Link to="/" onClick={() => setIsSidebarOpen(false)}>
          <MenuItem isActive={location.pathname === '/'}>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              ></path>
            </svg>
            <Des isActive={location.pathname === '/'}>메인 화면</Des>
          </MenuItem>
        </Link>
        <Link to="/physical" onClick={() => setIsSidebarOpen(false)}>
          <MenuItem isActive={location.pathname === '/physical'}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z"
              ></path>
            </svg>
            <Des isActive={location.pathname === '/physical'}>측정 안내</Des>
          </MenuItem>
        </Link>
        <Link to="/guide" onClick={() => setIsSidebarOpen(false)}>
          <MenuItem isActive={location.pathname === '/guide'}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              ></path>
            </svg>
            <Des isActive={location.pathname === '/guide'}>인증 기준</Des>
          </MenuItem>
        </Link>
        <MenuItem onClick={onLogOut} className="log-out">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
            ></path>
          </svg>
          <Des isActive={false}>로그아웃</Des>
        </MenuItem>
      </SidebarModal>

      <Main>
        <TimeoutRedirect>
          <Outlet />
        </TimeoutRedirect>
      </Main>
    </Wrapper>
  );
}
