import styled from 'styled-components';

export const BenefitContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    font-size: 28px;
  }
`;

export const Text = styled.div`

  p {
    font-size: 18px;
    line-height: 27px;

    span {
      font-weight: 700;
    }
  }

  @media(max-width: 425px) {
    p {
      font-size: 16px;
      line-height: 25px;
    }
  }

`;
