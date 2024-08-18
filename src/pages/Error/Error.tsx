import { Footer, Header } from 'layout';
import { StyledError } from './Error.styled';
import { Container } from 'components/styled';

function Error() {
  return <>
    <Header />

    <Container>
      <StyledError>
        <span>404</span>
        <p>Page not found</p>
      </StyledError>
    </Container>

    <Footer />
  </>;
}

export default Error;
