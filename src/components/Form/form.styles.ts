import styled from 'styled-components';
import colors from '../../style/colors';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 18px;

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    label {
      font-weight: 700;
    }
  }

  .input-checkbox-group {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-weight: 700;

    input {
      margin-top: 5px;
      cursor: pointer;
    }


    a {
      color: ${colors.primary.base};
      text-decoration: underline;
    }
  }

  @media(max-width: 425px) {
    font-size: 16px;
    gap: 1rem;
  }

`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${colors.primary.base};
  font-size: 1rem;
  color: ${colors.light};
  font-weight: 700;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 5px;
  transition: all .4s ease-in;

  &:hover {
    background-color: ${colors.primary.hover};
  }

  @media(max-width: 425px) {
    font-size: 16px;
  }
`;
