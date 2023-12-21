import React from "react";
import { styled } from "styled-components";

export default class NewCatalog extends React.Component {
  render() {
    return (
      <CatalogWrap>
        <GridWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
          <DivWrap></DivWrap>
        </GridWrap>
      </CatalogWrap>
    );
  }
}

const CatalogWrap = styled.div`

`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, 1fr);

  
`;

const DivWrap = styled.div`
 background-color: black;
`;
