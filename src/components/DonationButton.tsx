import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #ab0003;
  color: #fff;
  height: 50px;
  width: 200px;
  line-height: 50px;
  font-size: 12px;
  border: none;
`

export const DonationButton: FC = () => {
  return <>
    <StyledButton type="button">
      ふるさと納税でもらう
    </StyledButton>
  </>
}
