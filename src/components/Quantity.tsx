import { FC, ReactElement } from "react";
import styled from 'styled-components'

const StyledQuantity = styled.div`
  > select {
    padding: 12px 25px;
    margin-right: 20px;
    border: #6e6e6e 1px solid;
    height: 50px;
  }
`

type Props = {
  stock: number,
  quantity: number,
  changeHandler: Function
}

export const Quantity: FC<Props> = ({ stock, quantity, changeHandler }) => {
  const options: ReactElement[] = (() => {
    let elements: ReactElement[] = []
    const max: number = stock > 10 ? 10 : stock;
    for (let i = 1; i <= max; i++) {
      elements.push((<><option value={i} selected={i === quantity} key={i}>{i}</option></>))
    }
    return elements;
  })()
  return (<>
    <StyledQuantity>
      <select name="quantity" onChange={event => {
        changeHandler(event);
      }}>
        {options.map(option => option)}
      </select>
    </StyledQuantity>
  </>)
}
