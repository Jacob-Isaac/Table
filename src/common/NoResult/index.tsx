import { NoResultContainer, StyledH1 } from "./styled";

interface NoResultProps {
  title: string;
  error404: string;
}

const NoResult: React.FC<NoResultProps> = ({ title, error404 }) => {
  return (
    <>
      <StyledH1>{title}</StyledH1>
      <NoResultContainer>
        <StyledH1>{error404}</StyledH1>
      </NoResultContainer>
    </>
  );
};

export default NoResult;