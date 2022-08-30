import { FC } from "react";
import styled from "styled-components";

const StyledBackButton = styled.div`
  > a {
    color: #f68b1f;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: #f68b1f 2px solid;
      background: #fff;
      text-align: center;
      line-height: 38px;
      margin-right: 10px;
    }
    &::after {
      content: '';
      width: 5px;
      height: 5px;
      border: 1px solid;
      border-color: transparent transparent #f68b1f #f68b1f;
      transform: rotate(45deg);
      position: absolute;
      left: 20px;
    }
  }
`

type Props = {
  url: string
}

export const BackButton: FC<Props> = ({url}) => {
  return <>
    <StyledBackButton>
      <a href={url}>通常購入に戻る</a>
    </StyledBackButton>
  </>
}
