import { Wrapper } from '@app-components'
import orderConfirmedIcon from '@app-assets/icons/icon-order-confirmed.svg'
import { resetProductQuantity } from '@app-store-features/products'
import { useAppDispatch } from '@app-hooks'

type Props = {
    order: CartState
    closeModal: () => void
}

export default function ModalContent(props: Props) {
    const dispatch = useAppDispatch()

    function renderHeaderContent() {
        return (
            <div className='flex flex-col gap-6'>
                <img className='w-[42px] aspect-square object-contain' src={orderConfirmedIcon} alt="Order Confirmed" />

                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-[#260F08] text-[40px] leading-[120%]'>Order Confirmed</h2>
                    <p className='text-[#87635A]'>We hope you enjoy your food!</p>
                </div>
            </div>
        )
    }

    function renderOrderedItems() {
        return (
            <Wrapper className='bg-[#FCF8F6] p-6'>
                {props.order.products.map((product, index) => (
                    <div key={index} className='py-4 first-of-type:pt-0 last-of-type:pb-6 border-b border-b-[#F5EEEC] flex justify-between items-center gap-2'>
                        <div className='flex items-center gap-4'>
                            <img className='object-contain max-w-[48px] aspect-square rounded-[4px]' src={product.image.thumbnail} alt={product.name} />

                            <div className='text-[14px] flex flex-col justify-between'>
                                <p className='font-bold text-[#260F08]'>{product.name}</p>
                                <div className='flex gap-2'>
                                    <span className='font-bold text-[#C73B0F] '>{product.quantity}x</span>
                                    <span className='text-[#87635A]'>@${product.price}</span>
                                </div>
                            </div>
                        </div>

                        <span className='text-[#260F08]'>
                            ${product.total}
                        </span>
                    </div>
                ))}

                <div className='flex items-center justify-between mt-6'>
                    <span className='text-[#260F08] text-[14px]'>Order Total</span>
                    <span className='font-bold text-[24px]'>${props.order.total}</span>
                </div>
            </Wrapper>
        )
    }

    function startNewOrderButton() {
        const handleClick = () => {
            new Promise((resolve) => {
                props.order.products.map((product) => {
                    dispatch(resetProductQuantity(product.id))
                })
                resolve(true)
            }).then(() => {
                props.closeModal()
            })

        }
        return (
            <button
                onClick={handleClick}
                className='relative grid place-items-center bg-[#C73B0F] before:absolute before:w-full before:h-full before:bg-transparent hover:before:bg-[rgba(0,0,0,.25)] font-semibold text-white min-h-[53px] rounded-full overflow-hidden before:transition-colors before:duration-300 before:ease-out'>
                <span className='z-[1]'>Start New Order</span>
            </button>
        )
    }

    return (
        <Wrapper className='bg-white p-6 pt-10 xl:p-10 flex flex-col gap-8 '>
            {/* #1 */}
            {renderHeaderContent()}

            {/* #2 */}
            {renderOrderedItems()}

            {/* #3 */}
            {startNewOrderButton()}
        </Wrapper>
    )
}
