import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { ContentContainer, ContentLink } from './content.styles';

type ContentType = {
  title: string;
  text: string;
  to: string;
  linkText: string;
}

function Content({
  title, text, to, linkText
}: ContentType) {
  return (
    <ContentContainer>
      <h2>{title}</h2>
      <p>{text}</p>
      <ContentLink to={`/${to}`}>
        {linkText} <HiOutlineArrowNarrowRight />
      </ContentLink>
    </ContentContainer>
  );
}

export default Content;
