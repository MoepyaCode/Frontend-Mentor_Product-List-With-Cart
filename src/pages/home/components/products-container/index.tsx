import React from 'react'
import { Wrapper } from '@app-components'
import { Product } from '../..'
import ProductCard from '../product-card'

type Props = {
    products: Product[] | null
}

export default function ProductContainer(props: Props) {
    console.log('ProductContainer', props.products)
  return (
    <Wrapper className='flex flex-wrap gap-[24px]'>
        {props.products?.map((product, index) => <ProductCard key={index} product={product} />)}
    </Wrapper>
  )
}
