import styled from "styled-components";
import manifest from "../manifest.json";

const CounterWrap = styled.div`
  display: flex;
  font-weight: 600;
  min-width: 90px;
  min-height: 35px;
  font-size: 18px;
  color: #adb5bd;
`;

const Amount = styled.div`
  text-align: center;
  margin: 0 3px;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  flex: 1 0 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: default;
  }
`;

const Button = styled.button`
  background-color: ${manifest.background_color};
  border: 0;
  border-radius: 4px;   
  flex: 1 0 30%;
  font-size: 14px;
  font-weight: 600;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

interface CounterProps {
  amount: number;
  updateAmount: (amount: number) => void;
}

export default function Counter({ amount, updateAmount }: CounterProps) {
  const Increase = () => updateAmount(++amount);
  const Decrease = () => updateAmount(amount && --amount);

  return (
    <CounterWrap>
      <Button onClick={Decrease}>-</Button>
      <Amount>{amount}</Amount>
      <Button onClick={Increase}>+</Button>
    </CounterWrap>
  );
}
