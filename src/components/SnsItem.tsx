import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function SnsItem() {
  return (
    <Wrapper>
      <h2>준비중</h2>
    </Wrapper>
  );
}
