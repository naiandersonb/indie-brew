/* eslint-disable react/no-unescaped-entities */
import imgHero from '../../assets/images/feed-mockup.png';
import userAvatars from '../../assets/images/user-avatars.svg';
import { Container } from '../../style/global';
import StartedButton from '../StartedButton';
import {
  HeroContainer, HeroContent, HeroImage, Testimonials
} from './hero.styles';

function Hero() {
  return (
    <Container>
      <HeroContainer>
        <HeroContent>
          <h1>Your weekly personal feed digest.</h1>
          <p>
            With IndieBrew, get personal feeds from resources all around the web, including Reddit, hackNews, IndieHackers, and much more.
          </p>

          <StartedButton />

          <Testimonials>
            <img src={userAvatars} alt="user avatars" />
            <p>
              Join <span>32,642</span> IndieBrewers in curating their personal digest.
            </p>
          </Testimonials>
        </HeroContent>
        <HeroImage>
          <img src={imgHero} alt="feed mockup" />
        </HeroImage>
      </HeroContainer>
    </Container>
  );
}

export default Hero;
