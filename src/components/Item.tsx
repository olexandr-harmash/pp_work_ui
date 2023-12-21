import styled from "styled-components";
import Price from "./Price";
import Rating from "./Rating";
import Counter from "./Counter";
import { useState } from "react";

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const Image = styled.img`
  max-width: 100%;
  min-width: 120px;
`;

const ItemName = styled.h2`
  margin-top: 4px;
  margin-bottom: 6px;
  color: black;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 20px;
  text-align: left;
`;

const CounterWrap = styled.div`
  margin-top: auto;
`;

interface ItemProps {
  name: string;
  sale: number;
  price: number;
  rating: number;
  imgUrl: string;
  currency: string;
}

export default function Item({
  name,
  sale,
  price,
  rating,
  imgUrl,
  currency,
}: ItemProps) {
  const [amount, setAmount] = useState(0);
  return (
    <ItemWrap>
      <Image src={imgUrl} alt=""></Image>
      <Rating max={5} score={rating}></Rating>
      <ItemName>{name}</ItemName>
      <CounterWrap>
        <Price price={price} currency={currency}></Price>
        <Counter amount={amount} updateAmount={setAmount}></Counter>
      </CounterWrap>
    </ItemWrap>
  );
}
