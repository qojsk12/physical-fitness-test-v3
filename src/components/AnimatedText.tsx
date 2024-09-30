// import {useEffect, useState} from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-rows: repeat(2, 1fr);
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-size: 24px;
// `;

// export default function AnimatedText() {
//   const [firstText, setFirstText] = useState(''); // 첫 번째 문장 관리
//   const [secondText, setSecondText] = useState(''); // 두 번째 문장 관리
//   const [charIndex, setCharIndex] = useState(0);
//   const [textIndex, setTextIndex] = useState(0); // 현재 문장 인덱스
//   const [allTextDisplayed, setAllTextDisplayed] = useState(false); // 두 문장이 모두 나왔는지 확인

//   const speed = 150; // 글자가 나타나는 속도
//   const pauseTime = 10000; // 모든 글자가 다 나타난 후 대기 시간

//   useEffect(() => {
//     const texts = [
//       '시흥체력인증센터에 오신걸 환영합니다.',
//       '신분증을 준비해주세요',
//     ];
//     const currentText = texts[textIndex]; // 현재 보여줄 문장

//     if (charIndex < currentText.length) {
//       // 아직 문장을 다 안 보여줬을 때
//       const timer = setTimeout(() => {
//         if (textIndex === 0) {
//           setFirstText((prev) => prev + currentText[charIndex]); // 첫 번째 문장 관리
//         } else {
//           setSecondText((prev) => prev + currentText[charIndex]); // 두 번째 문장 관리
//         }
//         setCharIndex((prev) => prev + 1);
//       }, speed);
//       return () => clearTimeout(timer);
//     } else {
//       // 문장을 다 보여줬을 때
//       if (textIndex === 1) {
//         setAllTextDisplayed(true); // 두 문장이 모두 나왔음을 표시
//       }
//       const pauseTimer = setTimeout(
//         () => {
//           if (textIndex === 1) {
//             // 두 번째 문장이 끝났을 때
//             setFirstText(''); // 첫 번째 문장 지우기
//             setSecondText(''); // 두 번째 문장 지우기
//           }
//           setTextIndex((prev) => (prev + 1) % texts.length); // 다음 문장으로 전환
//           setCharIndex(0); // 인덱스 초기화
//           setAllTextDisplayed(false); // 상태 초기화
//         },
//         allTextDisplayed ? pauseTime : 0
//       ); // 두 문장이 모두 나왔을 때만 대기

//       return () => clearTimeout(pauseTimer);
//     }
//   }, [charIndex, textIndex, speed, pauseTime, allTextDisplayed]);

//   return (
//     <Wrapper>
//       <div>{firstText}</div>
//       <div>{secondText}</div>
//     </Wrapper>
//   );
// }

import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
`;

export default function AnimatedText() {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const speed = 150; // 글자가 나타나는 속도
  const pauseTime = 10000; // 모든 글자가 다 나타난 후 대기 시간

  useEffect(() => {
    const texts = ['시흥체력인증센터에 오신걸 환영합니다.'];
    const currentText = texts[textIndex]; // 현재 보여줄 문장

    if (charIndex < currentText.length) {
      // 아직 문장을 다 안 보여줬을 때
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]); // 한 글자씩 추가
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // 문장을 다 보여줬을 때
      const pauseTimer = setTimeout(() => {
        setCharIndex(0); // 다음 문장을 위해 글자 인덱스 초기화
        setDisplayedText(''); // 다음 문장을 위해 화면에서 글자를 지움
        setTextIndex((prev) => (prev + 1) % texts.length); // 다음 문장으로 넘어감
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }
  }, [charIndex, textIndex, speed, pauseTime]);

  return <Wrapper>{displayedText}</Wrapper>;
}
