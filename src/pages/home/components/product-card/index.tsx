import React, { useEffect } from 'react'
import { Wrapper } from '@app-components'
import iconAddToCart from '@app-assets/icons/icon-add-to-cart.svg'
import { useAppDispatch } from '@app-hooks'
import { decrementProductQuantity, incrementProductQuantity } from '@app-store-features/products'
import DecrementButton from './decrementButton'
import IncrementButton from './incrementButton'

type Props = {
  product: Product
}

export default function ProductCard(props: Props) {
  const dispatch = useAppDispatch()
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

  function imageRender() {
    const image = props.product.image

    if (windowWidth < 768) {
      return image.mobile
    } else if (windowWidth < 1280) {
      return image.tablet
    } else {
      return image.desktop
    }
  }

  function addToCart() {
    dispatch(incrementProductQuantity(props.product.id))
  }

  function incremenetQuantity(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    dispatch(incrementProductQuantity(props.product.id))
  }

  function decrementQuantity(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    dispatch(decrementProductQuantity(props.product.id))
  }

  function buttonsRender() {
    if (props.product.quantity > 0) {
      return (
        <div className='absolute bottom-[-22px] w-full max-w-[160px] max-h-[44px] bg-[#C73B0F] text-white p-[12px] z-[1] rounded-full flex flex-nowrap justify-between items-center gap-2 border border-[#C73B0F] transition-colors duration-300 ease-out'>
          <DecrementButton windowWidth={windowWidth} handleClick={decrementQuantity} />
          <span>{props.product.quantity}</span>
          <IncrementButton windowWidth={windowWidth} handleClick={incremenetQuantity} />
        </div>
      )
    }

    return (
      <button onClick={addToCart} className='absolute bottom-[-22px] w-full max-w-[160px] max-h-[44px] bg-white p-[12px] z-[1] rounded-full flex flex-nowrap justify-center items-center gap-2 border border-[#AD8A85] hover:text-[#C73B0F] transition-colors duration-300 ease-out'>
        <img className='max-w-[20px] max-h-[20px]' src={iconAddToCart} alt="Add to Cart" />
        <span className='font-semibold text-[14px]'>Add to Cart</span>
      </button>
    )
  }

  return (
    <Wrapper className='flex flex-col flex-nowrap gap-[38px] md:max-w-[213.33px] md:min-h-[212px] xl:max-w-[250.67px]'>
      {/* #1 */}
      <div className='relative flex flex-col items-center'>
        <div className='max-w-[327px] md:min-w-[213.33px] xl:min-w-[250.67px] md:min-h-[212px] xl:min-h-[240px] overflow-hidden rounded-[8px]'>
          <img ref={imageRef} loading='lazy' className='object-fill md:object-cover hover:scale-105 transition-transform duration-300 ease-out h-full' src={imageRender()} alt={props.product.name} />
        </div>
        {buttonsRender()}
      </div>

      {/* #2 */}
      <div className='flex flex-col gap-1'>
        <h2 className='text-[#87635A] text-[14px]'>{props.product.category}</h2>
        <h3 className='font-semibold text-[#260F08]'>{props.product.name}</h3>
        <h4 className='font-semibold text-[#C73B0F]'>${props.product.price}</h4>
      </div>
    </Wrapper>
  )
}
