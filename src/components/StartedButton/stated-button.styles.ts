import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../style/colors';

export const Button = styled(Link)`
  background-color: ${colors.primary.base};
  width: max-content;
  padding: 1rem 2rem;
  border-radius: 5px;
  color: ${colors.light};
  font-weight: 700;
  font-size: 18px;
  transition: all .4s ease;

  span {
    font-weight: 400;
  }

  &:hover {
    background-color: ${colors.primary.hover};
  }
`;
