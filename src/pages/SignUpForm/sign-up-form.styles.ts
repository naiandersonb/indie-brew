import styled from 'styled-components';
import colors from '../../style/colors';

export const SignUpFormContainer = styled.div`
  background: rgb(244,218,206);
  background: linear-gradient(159deg, rgba(244,218,206,1) 0%, rgba(255,249,247,1) 33%, rgba(255,241,241,1) 100%);

  width: 100%;
  min-height: 100vh;
`;

export const SignUpFormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 0;

  .title {
    font-size: 36px;
  }

  .content {
    max-width: 447px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form {
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.08);

    .form-title {
      margin-bottom: 1rem;
      font-size: 24px;
    }
  }

  @media(max-width: 1018px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 0;


    .content, .form {
      max-width: 100%;
    }

    .form {
      padding: 2rem;

      .form-title {
        font-size: 20px;
      }
    }
  }
`;

export const SignUpHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${colors.light};
    border-radius: 5px;
    border: 1px solid ${colors.input.borderColor};
    color: ${colors.dark};
    font-size: 24px;
  }

  p {
    color: ${colors.dark};
    font-weight: 700;
  }

  @media(max-width: 700px) {
    p {
      display: none;
    }
  }
`;
