import "./App.css";
import { Catalog } from "./containers/Catalog";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Catalog></Catalog>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f5f5f1;
  }

  h3 {
    font-weight: 700;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  height: 500px;
  margin: 0 auto;

  /* Стили для разрешения 768x1024 и аналогичных (планшеты) */
  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    & {
      max-width: 868px;
    }
  }

  /* Стили для разрешения меньше 768px (мобильные устройства) */
  @media only screen and (max-width: 767px) {
    & {
      max-width: 100%;
      margin: 0 2vw; /* Левый внешний отступ в vw для мобильных */
    }
  }
`;
