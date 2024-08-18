import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from 'layout';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/collection/test');
  }, [navigate]);

  return <>
    <Header />
    Home Page
    <Footer />
  </>;
}

export default Home;
