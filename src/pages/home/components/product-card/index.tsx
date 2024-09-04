import React from 'react'
import { Wrapper } from '@app-components'
import { Product } from '../..'
import iconAddToCart from '@app-assets/icons/icon-add-to-cart.svg'

type Props = {
  product: Product
}

export default function ProductCard(props: Props) {
  console.log('ProductCard', props.product.name)

  function imageRender() {
    const image = props.product.image
    if(window.innerWidth < 768) {
      return image.mobile
    } else if(window.innerWidth < 1280) {
      return image.tablet
    } else {
      return image.desktop
    }
  }

  return (
    <Wrapper className='flex flex-col flex-nowrap gap-[38px] md:max-w-[213.33px] md:min-h-[212px] xl:max-w-[250.67px]'>
      {/* #1 */}
      <div className='relative flex flex-col items-center'>
        <div className='max-w-[327px] md:min-h-[212px] xl:min-h-[240px] overflow-hidden rounded-[8px]'>
          <img className='object-fill md:object-cover hover:scale-105 transition-transform duration-300 ease-out h-full' src={imageRender()} alt={props.product.name} />
        </div>
        <button className='absolute bottom-[-22px] w-full max-w-[160px] max-h-[44px] bg-white p-[12px] z-[1] rounded-full flex flex-nowrap justify-center items-center gap-2 border border-[#AD8A85] hover:text-[#C73B0F] transition-colors duration-300 ease-out'>
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
