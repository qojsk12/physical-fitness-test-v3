import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #111827;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 420px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 50px;
`;
export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  & [type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: red;
`;

export const Switcher = styled.span`
  color: #fff;
  margin-top: 50px;
  a {
    color: #1d9bf0;
  }
`;
