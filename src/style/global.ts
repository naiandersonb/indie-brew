import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html,
    body {
        font-size: 16px;
        font-family: 'DM Sans', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    img {
        width: 100%;
    }

`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: 1200px) {
    width: 95%;
  }

  @media(max-width: 425px) {
    width: 90%;
  }
`;
