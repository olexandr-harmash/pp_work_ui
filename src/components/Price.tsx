import styled from "styled-components";
import manifest from "../manifest.json";

const PriceWrap = styled.div`
  font-weight: 600;
  display: flex;
`;

const CostWrap = styled.div`
  display: flex;
`;

const Currency = styled.p`
  margin: 0;
  color: #adb5bd !important;
  font-size: 10px;
`;

const Cost = styled.p`
  margin: 0;
  color: ${manifest.theme_color};
  font-size: 18px;
`;

interface PriceProps {
  price: number;
  currency: string;
}

export default function Price({ currency, price }: PriceProps) {
  return (
    <PriceWrap>
      <CostWrap>
        <Cost>{price}</Cost>
        <Currency>{currency}</Currency>
      </CostWrap>
    </PriceWrap>
  );
}
