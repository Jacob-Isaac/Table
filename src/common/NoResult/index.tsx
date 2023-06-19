import { NoResultContainer, StyledH1 } from "./styled";
import { NoResultProps } from "../interfaces";

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
