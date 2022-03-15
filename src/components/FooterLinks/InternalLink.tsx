/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { FooterLinkContainer } from './footer-links.styles';

type FooterLinksType = {
  title: string;
  links: string[];
}

function InternalLink({ title, links }: FooterLinksType) {
  return (
    <FooterLinkContainer>
      <h3>{title}</h3>

      {links.map((link, index) => {
        if (link.match('Homepage')) {
          link = '';
          const text = 'Homepage';
          return (
            <Link key={index} to={`${link.toLocaleLowerCase()}`}>{text}</Link>
          );
        }
        return (
          <Link key={index} to={`${link.toLocaleLowerCase()}`}>
            {link}
          </Link>
        );
      })}

    </FooterLinkContainer>
  );
}

export default InternalLink;
