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
      <h2>item1</h2>
      <h2>item2</h2>
      <h2>item3</h2>
    </Wrapper>
  );
}
