import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
      box-sizing:border-box;
      margin:0;
      padding:0;
      outline:none;
      border:none;
  }

  body{
      background:#dcdce6;
      color:#353235;
      font-family: 'Comfortaa', cursive;
      font-size:1em;
      font-weight:700;
  }
  
h1,h2,h3,h4,h5{
    font-family: 'Dosis', sans-serif;
    margin:0;
    padding:0;
}
  a{
      text-decoration:none;
      color:currentColor;
      font-family: 'Dosis', sans-serif;
  }

  ul{
      margin:0;
      padding:0;
      list-style:none;
  }
  bottom{
      border:none;
      outline:none;
      font-family: 'Dosis', sans-serif;
  }
`;

export default GlobalStyle;
