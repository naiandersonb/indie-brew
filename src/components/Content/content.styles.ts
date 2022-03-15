import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../style/colors';

export const ContentContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5em;

  h2 {
    font-size: 2em;
  }

  p {
    color: ${colors.gray};
    font-size: 18px;
    line-height: 28px;
  }

`;

export const ContentLink = styled(Link)`
  margin-top: 1em;
  color: ${colors.primary.base};
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1em;

  &:hover {
    text-decoration: underline;
  }
`;
