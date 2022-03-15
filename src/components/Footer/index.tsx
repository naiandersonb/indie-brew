import { Container } from '../../style/global';
import { ExternalLink, InternalLink } from '../FooterLinks';
import { FooterContainer, FooterContent, FooterLinksContainer } from './footer-styles';

function Footer() {
  const links = [
    {
      id: 1,
      text: 'HackerNews',
      url: 'http://hackernews.com',
    },
    {
      id: 2,
      text: 'Reddit',
      url: 'http://reddit.com',
    },
    {
      id: 3,
      text: 'Twitter',
      url: 'http://twitter.com',
    },
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <div className="AboutPage">
            <h3>IndieBrew</h3>
            <p>With IndieBrew, get personal feeds from resources all around the web, including Reddit, HackerNews, and much more.</p>
            <p>Made with ❤️ in the <a href="https://github.com/naiandersonb">Naianderson Bruno</a></p>
          </div>
          <FooterLinksContainer>
            <InternalLink
              title="Sitemap"
              links={['Homepage', 'Pricing']}
            />

            <InternalLink
              title="Resources"
              links={['Support', 'Contact', 'FAQ']}
            />

            <InternalLink
              title="Company"
              links={['About', 'Customers', 'Blog']}
            />

            <ExternalLink
              title="Portfolios"
              links={links}
            />

          </FooterLinksContainer>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
}
export default Footer;
