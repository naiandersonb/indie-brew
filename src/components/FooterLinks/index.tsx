// /* eslint-disable react/no-array-index-key */
// import { Link } from 'react-router-dom';
// import { FooterLinkContainer } from './footer-links.styles';

// type FooterLinksType = {
//   title: string;
//   links: string[];
// }

// function FooterLinks({ title, links }: FooterLinksType) {
//   return (
//     <FooterLinkContainer>
//       <h3>{title}</h3>
//       {links.map((link, index) => (
//         <Link key={index} to={`${link.toLocaleLowerCase()}`}>{link}</Link>
//       ))}
//     </FooterLinkContainer>
//   );
// }

// export default FooterLinks;
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

export { ExternalLink, InternalLink };
