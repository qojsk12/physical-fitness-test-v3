import styled from 'styled-components';

// ListItem 관련 스타일
export const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 500px;
  height: 800px;
  box-shadow: 0px 10px 10px 10px #898888;
  box-sizing: border-box;
  border: 3px solid #000;
  background-color: #000;
  gap: 3px;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const GifVideo = styled.video`
  padding: 1px;
  width: 100%;
  height: 100%;
  object-fit: fill;
  box-sizing: border-box;
`;

export const DescriptionBox = styled.div`
  background-color: #000;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3px;
`;

export const Description = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;

  &.span {
    grid-column: span 2;
  }
`;

// MainImg 관련 스타일
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainListItem = styled.div`
  display: flex;
  width: 1200px;
`;

export const MainImageBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
