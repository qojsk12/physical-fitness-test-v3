import styled from 'styled-components';

export const PhysicalListDes = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 50px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    padding: 50px;
  }
`;

export const PhysicalListItem = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 500px;
  height: 800px;
  box-shadow: 0px 5px 10px 0px #898888;
  box-sizing: border-box;
  border: 2px solid #000;
  background-color: #000;
  gap: 2px;
  &.main {
    display: flex;
    max-width: 1200px;
    width: 100%;
  }
`;

export const ImgBox = styled.div`
  width: 100%;

  &.mainImg {
    height: 100%;
  }
`;

export const ImgMain = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Video = styled.video`
  padding: 1px;
  width: 100%;
  height: 100%;
  object-fit: fill;
  box-sizing: border-box;
`;

export const DesBox = styled.div`
  background-color: #000;
  height: 100%;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
`;

export const ImgDescription = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`;

export const Span = styled.span`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: #f0ecfc;
  background-image: #4e42f0;
  line-height: 42px;
  padding: 0;
  border: none;
  color: #000;

  &:hover {
    color: #fff;
    background: transparent;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: #c797eb;
    transition: all 0.3s ease;
  }

  &::before {
    height: 0%;
    width: 2px;
  }

  &::after {
    width: 0%;
    height: 2px;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover::after {
    width: 100%;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  span:hover {
    color: #c797eb;
  }

  span::before,
  span::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: #c797eb;
    transition: all 0.3s ease;
  }

  span::before {
    width: 2px;
    height: 0%;
  }

  span::after {
    height: 2px;
    width: 0%;
  }

  span:hover::before {
    height: 100%;
  }

  span:hover::after {
    width: 100%;
  }
`;
