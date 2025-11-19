import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: #111827;
  color: white;
`;

export default function LoadingScreen() {
  return <Wrapper>Loading...</Wrapper>;
}
