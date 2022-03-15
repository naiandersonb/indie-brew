import { FooterLinkContainer } from './footer-links.styles';

type LinkType = {
  id: number;
  url: string;
  text: string;
}

type FooterLinksType = {
  title: string;
  links: LinkType[];
}

export function ExternalLink({ title, links }: FooterLinksType) {
  return (
    <FooterLinkContainer>
      <h3>{title}</h3>

      {links.map(({ id, url, text }) => (
        <a
          key={id}
          href={`http://${url}`}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      ))}
    </FooterLinkContainer>
  );
}

export default ExternalLink;
