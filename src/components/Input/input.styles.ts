import styled from 'styled-components';
import colors from '../../style/colors';

export const InputStyled = styled.input`
  border: 1px solid ${colors.input.borderColor};
  border-radius: 5px;
  padding: 1rem;
  font-size: 18px;

  &::placeholder {
    color: ${colors.input.placeholderColor};
  }

  @media(max-width: 425px) {
    font-size: 16px;
  }
`;
