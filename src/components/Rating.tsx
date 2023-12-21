import styled from "styled-components";

const PriceWrap = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 9.3px;
  width: 10px;
  margin-right: 4px;
`;

interface RatingProps {
  max: number;
  score: number;
}

export default function Rating({ score, max }: RatingProps) {
  return (
    <PriceWrap>
      {Array(max)
        .fill(0)
        .map((_, i) => (
          <Image
            key={i}
            src={
              ++i <= score ? "http://uitheme.net/orgomart/images/star.png" : ""
            }
            alt=""
          ></Image>
        ))}
    </PriceWrap>
  );
}
