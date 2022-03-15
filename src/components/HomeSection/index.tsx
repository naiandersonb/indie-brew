import phoneMockup from '../../assets/images/phone-mockup.png';
import socialMediaIcons from '../../assets/images/social-media-icons.png';
import Content from '../Content';
import { HomeSectionContainer } from './home.section.styles';

function HomeSection() {
  return (
    <HomeSectionContainer>
      <div className="resources">
        <Content
          title="Curate your from dozens of resources"
          text=" We cover all major platforms where on could want to curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more."
          to="resources"
          linkText="See full list of resources"
        />
        <img src={socialMediaIcons} alt="social media icons" />
      </div>

      <div className="wait-list">
        <img src={phoneMockup} alt="phone mockup" />
        <Content
          title="Access your feed from the comfort of your phone."
          text=" With native apps for both iOS and Android, accessing your curated content has never been easier."
          to="waitlist"
          linkText="Sign up for the waitlist"
        />
      </div>

    </HomeSectionContainer>
  );
}

export default HomeSection;
