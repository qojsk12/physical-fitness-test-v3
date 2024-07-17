import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #000;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #fff;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: #d50404;
`;

export const Switcher = styled.span`
  color: #fff;
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`;
