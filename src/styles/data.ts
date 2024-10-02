// components/data.ts

import Work2min from '../assets/video/twoMinutesSpotWalking.mp4';
import Work6min from '../assets/video/sixMinutesWalking.mp4';
import Run10m from '../assets/video/tenMShuttleRun.mp4';
import SpeedTime from '../assets/video/reactionTime.mp4';
import 윗몸말아올리기 from '../assets/video/sitUps.mp4';
import 반복점프 from '../assets/video/repeatedJumps.mp4';
import 제자리멀리뛰기 from '../assets/video/standingLongJump.mp4';
import 체공시간 from '../assets/video/hangTime.mp4';
import 왕복달리기20m from '../assets/video/twentyMShuttleRun.mp4';
import 트레드밀 from '../assets/video/treadmill.mp4';
import 청소년스텝 from '../assets/video/youthStepTest.mp4';
import 성인기스텝 from '../assets/video/adultStepTest.mp4';

export const t__CardioItems = [
  {
    videoSrc: 왕복달리기20m,
    title: '20m 왕복 오래달리기',
    gradingMethod: '등급 산정 방식',
    description: '횟수',
    duration: '진행 시간: 최대한 오래',
  },
  {
    videoSrc: 트레드밀,
    title: '트레드밀',
    gradingMethod: '등급 산정 방식',
    description: '심박수 + 신장 + 체중',
    duration: '진행 시간: 6분',
  },
  {
    videoSrc: 청소년스텝,
    title: '스텝 박스',
    gradingMethod: '등급 산정 방식',
    description: '심박수 + 체중 + 신장',
    duration: '남자: 3분, 50.8cm, 120bpm, 여자: 3분, 45.7cm, 96bpm',
  },
];

export const t__MuscularItems = [
  {
    videoSrc: 윗몸말아올리기,
    title: '윗몸 말아올리기',
    gradingMethod: '등급 산정 방식',
    description: '횟수',
    duration: '최대한 많이',
  },
  {
    videoSrc: 반복점프,
    title: '반복점프',
    gradingMethod: '등급 산정 방식',
    description: '횟수',
    duration: '진행 시간: 30초',
  },
];

export const a__CardioItems = [
  {
    videoSrc: 왕복달리기20m,
    title: '20m 왕복 오래달리기',
    gradingMethod: '등급 산정 방식',
    description: '횟수',
    duration: '진행 시간: 최대한 오래',
  },
  {
    videoSrc: 트레드밀,
    title: '트레드밀',
    gradingMethod: '등급 산정 방식',
    description: '심박수 + 신장 + 체중',
    duration: '남자 9분, 여자 6분',
  },
  {
    videoSrc: 성인기스텝,
    title: '스텝 박스',
    gradingMethod: '등급 산정 방식',
    description: '심박수 + 체중 + 신장',
    duration: '3분, 30.5cm, 96bpm',
  },
];

export const a__SpeedItems = [
  {
    videoSrc: Run10m,
    title: '10m 왕복 달리기',
    gradingMethod: '등급 산정 방식',
    description: '시간',
    duration: '최대한 빠르게',
  },
  {
    videoSrc: SpeedTime,
    title: '반응 시간',
    gradingMethod: '등급 산정 방식',
    description: '시간',
    duration: '최대한 빠르게',
  },
];

export const a__PowerItems = [
  {
    videoSrc: 제자리멀리뛰기,
    title: '제자리 멀리뛰기',
    gradingMethod: '등급 산정 방식',
    description: '멀리 뛴 거리',
    duration: '2번 진행',
  },
  {
    videoSrc: 체공시간,
    title: '체공 시간',
    gradingMethod: '등급 산정 방식',
    description: '공중에 떠 있는 시간',
    duration: '제한 시간 없음',
  },
];

export const e__CadioItems = [
  {
    videoSrc: Work2min,
    title: '2분 제자리 걷기',
    gradingMethod: '등급 산정 방식',
    description: '횟수',
    duration: '진행 시간: 2분',
  },
  {
    videoSrc: Work6min,
    title: '6분 걷기',
    gradingMethod: '등급 산정 방식',
    description: '거리',
    duration: '진행 시간: 6분',
  },
];
