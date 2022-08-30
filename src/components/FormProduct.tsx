import { FC, useState } from 'react';
import styled from 'styled-components';
import { Quantity } from './Quantity'
import {Price} from './Price'
import {BackButton} from './BackButton'
import {DonationButton} from './DonationButton'
import {FormItem} from './FormItem'

type Props = {
  price: number;
  stock: number;
  url: string;
};

const StyledForm = styled.div`
  background: #eee;
  width: fit-content;
  padding: 20px 30px;
  > .attention {
    font-size: 12px;
    color: #c00;
    margin-top: 0;
  }
`

export const FormProduct: FC<Props> = ({ price, stock, url }) => {
  const [quantity, setQuantity] = useState(1);
  const stockText: string = (() => {
    if (stock > 5) {
      return String(stock);
    } else if (stock !== 0) {
      return '残りわずか。寄付はお早めに';
    } else {
      return '在庫なし'
    }
  })();
  return <>
    <StyledForm>
      <FormItem head="寄付額：">
        <Price price={price}></Price>
      </FormItem>
      <p className='attention'>何回お礼の品をもらっても実質年間2,000円の負担</p>
      <FormItem head="在庫：">
        <div>{stockText}</div>
      </FormItem>
      <FormItem head="数量：" exClassName='m-10'>
        <Quantity stock={stock} quantity={quantity} changeHandler={(event: any) => {
          setQuantity(Number(event.currentTarget.value))
        }}></Quantity>
        <DonationButton></DonationButton>
      </FormItem>
      {url.length > 0 &&
        <BackButton url={url}></BackButton>
      }
    </StyledForm>
  </>;
};
