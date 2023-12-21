import { styled } from "styled-components";

interface OptionsParams {
  onChange: (options: any) => void;
}

export default function Options({ onChange }: OptionsParams) {
  return (
    <OptionsWrap>
      <label htmlFor="paginationLimit">limit:</label>
      <Limit
        defaultValue="20"
        id="paginationLimit"
        name="paginationLimit"
        onChange={({ target }) => onChange(target.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Limit>
    </OptionsWrap>
  );
}

const OptionsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 140px;
`;

const Limit = styled.select`
  border: 0;
`;
