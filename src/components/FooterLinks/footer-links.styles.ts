import styled from 'styled-components';
import colors from '../../style/colors';

export const FooterLinkContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;

  a {
    color: ${colors.gray};

    &:hover {
      text-decoration: underline;
    }
  }

  @media(max-width: 425px) {
    margin-bottom: 1em;
  }
`;
