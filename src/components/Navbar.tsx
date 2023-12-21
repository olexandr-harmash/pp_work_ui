import { useState } from "react";
import styled from "styled-components";

interface NavbarProps {
  pattern: any;
  onChange: (filters: any) => void;
}

interface BlockProps {
  filter: string;
  name: string;
  values: { id: string; name: string }[];
}

function Block({ filter, name, values }: BlockProps) {
  const [open, setOpen] = useState(true);

  return (
    <BlockWrap>
      <HeaderWrap onClick={() => setOpen(!open)}>
        <span>{name}</span>
        <Arrow></Arrow>
      </HeaderWrap>
      {open && (
        <ul>
          {values.map((v) => (
            <LiWrap key={v.id}>
              <Input name={filter} value={v.id} id={v.id} type="checkbox" />
              <label htmlFor={v.id}>{v.name}</label>
            </LiWrap>
          ))}
        </ul>
      )}
    </BlockWrap>
  );
}

export default function Navbar({ pattern, onChange }: NavbarProps) {
  const handleChange = (e: any) => {
    let form = e.currentTarget;
    let formData = new FormData(form);

    let filters: { [key: string]: string[] } = {};

    for (let key of formData.keys()) {
      filters[key] = formData.getAll(key) as string[];
    }

    onChange(filters);
  };

  return (
    <NawbarWrap>
      <form action="" onChange={handleChange}>
        {Object.keys(pattern).map((k) => (
          <Block filter={k} key={k} name={k} values={pattern[k]}></Block>
        ))}
      </form>
    </NawbarWrap>
  );
}

const NawbarWrap = styled.div`
  flex: 1 0 15%;
  line-height: 35px;
  font-size: 13px;
  font-weight: 600 !important;
  color: rgba(0, 0, 0, 0.705);
  font-family: "Montserrat", sans-serif;
  text-align: left;
  background-color: #ffffff;
  padding: 8px 16px;
`;

const BlockWrap = styled.div``;

const HeaderWrap = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.p`
  position: relative;
  &::after {
    position: absolute;
    top: 14px;
    right: 0;
    background-size: 10px 10px;
    width: 10px;
    height: 10px;
    content: "";
    border: 0 !important;
    font-family: "themify";
    background-image: url(https://img.icons8.com/ios/50/collapse-arrow--v1.png);
    transform: rotate(90deg);
  }
`;

const LiWrap = styled.li`
  display: flex;
`;

const Input = styled.input`
  accent-color: green;
  margin-right: 10px;
`;