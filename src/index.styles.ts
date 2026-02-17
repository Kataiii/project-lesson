import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #FF7A00;
        --color-text: #FFFFFF;

        --font-weigth-ligth:300;
        --font-weigth-regular:500;
        --font-weigth-bold:900;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Advent Pro'
    }

    @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet')
`;

export const Title = styled.h1`
  color: var(--color-text);
  font-weigth: var(--font-weigth-bold);
`;
