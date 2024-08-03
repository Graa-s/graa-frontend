import { StyledError } from './Error.styled';
import { Footer, Header } from 'layout';

function Error() {
  return <>
    <Header />

    <StyledError>
      <span>404</span>
      <p>Page not found</p>
    </StyledError>

    <Footer />
  </>;
}

export default Error;
