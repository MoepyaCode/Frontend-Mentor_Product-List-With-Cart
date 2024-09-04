import React from 'react'
import { Wrapper } from '@app-components'
import { Product } from '../..'
import iconAddToCart from '@app-assets/icons/icon-add-to-cart.svg'

type Props = {
  product: Product
}

export default function ProductCard(props: Props) {
  console.log('ProductCard', props.product.name)
  return (
    <Wrapper className='flex flex-col flex-nowrap gap-[38px] '>
      {/* #1 */}
      <div className='relative flex flex-col items-center'>
        <div className='max-w-[327px] max-h-[212px] overflow-hidden rounded-[8px]'>
          <img className='object-cover hover:scale-105 transition-transform duration-300 ease-out' src={props.product.image.mobile} alt={props.product.name} />
        </div>
        <button className='absolute bottom-[-22px] w-full max-w-[160px] max-h-[44px] bg-white p-[12px] z-[1] rounded-full flex flex-nowrap justify-center items-center gap-2 border border-[#AD8A85]'>
          <img className='max-w-[20px] max-h-[20px]' src={iconAddToCart} alt="Add to Cart" />
          <span className='font-semibold text-[14px]'>Add to Cart</span>
        </button>
      </div>

      {/* #2 */}
      <div className='flex flex-col gap-1'>
        <h2 className='text-[#87635A] text-[14px]'>{props.product.category}</h2>
        <h3 className='font-semibold text-[#260F08]'>{props.product.name}</h3>
        <h4 className='font-semibold text-[#C73B0F]'>${props.product.price}0</h4>
      </div>
    </Wrapper>
  )
}
