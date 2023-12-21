import { styled } from "styled-components";

interface PaginationProps {
  amount: number;
  limit: number;
  next: boolean;
  page: number;
  onChange: (options: any) => void;
}

export default function Pagination({
  amount,
  limit,
  next,
  page,
  onChange,
}: PaginationProps) {
  const nextPage = () => {
    if (next) onChange(++page);
  };

  const prevPage = () => {
    if (page > 0) onChange(--page);
  };

  return (
    <PaginationWrap>
      <Button onClick={prevPage}>prev</Button>
      <Button onClick={nextPage}>next</Button>
    </PaginationWrap>
  );
}

const PaginationWrap = styled.div`
  display: flex;
  min-width: 100px;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  text-transform: capitalize;
  max-width: 60px;
  max-height: 80px;
  padding: 5px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
