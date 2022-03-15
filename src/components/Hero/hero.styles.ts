import styled from 'styled-components';
import colors from '../../style/colors';

export const HeroContainer = styled.header`
  display: flex;
  align-items: center;
  height: 70vh;

  @media(max-width: 768px) {
    flex-direction: column;
    min-height: 100%;

  }

`;

export const HeroContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    width: 68%;

  }

  p {
    font-size: 18px;
    line-height: 28px;
    color: ${colors.gray};
    width: 80%;
  }

  @media(max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 2.5rem;
      width: 100%;
    }

    p {
      font-size: 18px;
      color: ${colors.gray};
      width: 100%;
    }
  }

  @media(max-width: 425px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const Testimonials = styled.div`
  img{
    width: 50%;
  }

  p {
    color: ${colors.gray};
  }

  span {
    color: ${colors.primary.base};
    font-weight: 700;
  }


`;

export const HeroImage = styled.div`
  width: 40%;

  @media(max-width: 768px) {

    width: 50%;
    order: -1;
    margin-bottom: 3em;
  }
`;
