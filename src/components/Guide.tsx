import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const IframeBox = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  padding: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  border: 1px solid #d1d1d1d8;
`;

const StyledIframe = styled.iframe`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default function Guide() {
  return (
    <Wrapper>
      <IframeBox>
        <StyledIframe
          src="https://nfa.kspo.or.kr/reserve/0/selectMeasureGradeItemListByAgeSe.kspo#"
          title="naver"
        ></StyledIframe>
      </IframeBox>
    </Wrapper>
  );
}
