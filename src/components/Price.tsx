import { FC } from "react";
import styled from "styled-components";

const StyledPrice = styled.div`
  display: flex;
  align-items: baseline;
    > .price {
      font-weight: bold;
      font-size: 24px;
      margin-right: 10px;
    }
    > .postage {
      font-weight: bold;
      font-size: 14px;
    }
`

type Props = {
  price: number
}

export const Price: FC<Props> = ({price}) => {
  const withComma = price.toLocaleString();
  return <>
    <StyledPrice>
      <span className="price">{withComma}円</span><span className="postage">送料無料</span>
    </StyledPrice>
  </>
}
