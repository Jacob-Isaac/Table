import {
  ErrorContainer,
  Title,
  Text,
  Button,
} from "./styled";

function ErrorPage() {
  return (
    <ErrorContainer>
      <Title>Ooops! Something went wrong...</Title>
      <Text>
        Please check your network connection
        <br /> and try again
      </Text>
      <Button to="/movies">Back to home page</Button>
    </ErrorContainer>
  );
}

export default ErrorPage;
