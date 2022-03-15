import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import HomeSection from '../../components/HomeSection';
import Navbar from '../../components/Navbar';
import { Container } from '../../style/global';
import { HomeContainer } from './home.styles';

function Home() {
  return (
    <>
      <HomeContainer>
        <Navbar />
        <Hero />
      </HomeContainer>
      <Container>
        <HomeSection />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
