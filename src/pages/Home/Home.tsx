import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Header } from 'layout';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/collection/test');
  }, [navigate]);

  return <>
    <Header />
    {/*<br />*/}
    {/*<br />*/}
    {/*<Button to="/collection/test">Collection Test</Button>*/}
    {/*<Button to="/nft/test">NFT Test</Button>*/}
    <Footer />
  </>;
}

export default Home;
