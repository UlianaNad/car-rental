import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Manrope', sans-serif;
  }
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
}

`;
