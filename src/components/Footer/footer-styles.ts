import styled from 'styled-components';
import colors from '../../style/colors';

export const FooterContainer = styled.footer`
  background-color: ${colors.light};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 40% max-content;
  align-content: flex-start;
  gap: 5em;

  padding: 3em 0;

  .AboutPage {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      color: ${colors.gray};
    }

    a {
      color: ${colors.primary.base};
      font-weight: 700;
    }
  }

  @media(max-width: 768px) {
    grid-template-columns: 30% 20%;
    gap: 2em;
  }

  @media(max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 3em;

  @media(max-width: 986px) {
    grid-template-columns: repeat(2, max-content);
  }

`;
