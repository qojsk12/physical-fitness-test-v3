import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../../firebase/config";

const Button = styled.button`
  margin-top: 30px;
  background: white;
  color: black;
  padding: 12px 24px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

export default function GitHubButton() {
  const onClick = () => {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <Button onClick={onClick}>
      <img src="/github-logo.svg" alt="GitHub" width={25} height={25} />
      GitHub으로 계속하기
    </Button>
  );
}
