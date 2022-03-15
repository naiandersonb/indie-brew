import styled from 'styled-components';

export const HomeSectionContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(2, max-content);

  .resources {
    display: grid;
    grid-template-columns: 70% 1fr;
    align-items: center;
    padding: 10rem 0;

    p {
      width: 80%;
    }

  }

  .wait-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 5rem 0;
  }

  @media(max-width: 768px) {
    img {
      width: 80%;
      margin: 0 auto;
      order: -1;
    }


    .resources, .wait-list {
      p {
        width: 100%;
      }
      grid-template-columns: 1fr;
      gap: 3rem;
      padding: 5rem 0;
    }
  }

`;
