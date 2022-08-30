import { FC } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  &.m-10 {
    margin: 10px 0;
  }

  > .item-header {
    color: #6e6e6e;
  }
`

type Props = {
  head: string,
  exClassName?: string,
  children: React.ReactNode
}

export const FormItem: FC<Props> = ({head, exClassName, children}) => {
  const className = exClassName ?? exClassName;
  return <>
    <StyledItem className={className ?? undefined}><span className="item-header">{head}</span>{children}</StyledItem>
  </>
}
