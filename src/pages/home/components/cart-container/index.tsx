import React from 'react'
import { Wrapper } from '@app-components'

import illustrationEmptyCartIcon from '@app-assets/icons/illustration-empty-cart.svg'
import carbonNeutralIcon from '@app-assets/icons/icon-carbon-neutral.svg'

import { useAppDispatch, useAppSelector } from '@app-hooks'

import RemoveButton from './removeButton'

import { resetProductQuantity } from '@app-store-features/products'
import ModalContent from '../modal-content'


export default function CartContainer() {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart)
    const modalRef = React.useRef<HTMLDialogElement>(null)

    function renderEmptyCartContent() {
        return (
            <div className="py-[16px] flex flex-col gap-[16px] items-center">
                <img className="max-w-[128px] aspect-square" src={illustrationEmptyCartIcon} alt="" />

                <h3 className="font-semibold text-[#87635A] text-[14px]">Your added items will appear here</h3>
            </div>
        )
    }

    function renderCartItem(product: Product, index: number) {
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            dispatch(resetProductQuantity(product.id))
        }

        return (
            <Wrapper key={index} className='border-b border-b-[#F5EEEC] py-4 first-of-type:pt-0 flex flex-nowrap justify-between items-center'>
                {/* #1 */}
                <div className='flex flex-col gap-2 text-[14px]'>
                    <h3 className='font-semibold '>{product.name}</h3>
                    <div className='flex items-center gap-[8px] text-[14px] text-[#87635A]'>
                        <span className='font-semibold text-[#C73B0F]'>{product.quantity}x</span>
                        <span>@{product.price}</span>
                        <span className='font-bold'>${product.total}</span>
                    </div>
                </div>

                {/* #2 */}
                <RemoveButton handleClick={handleClick} />
            </Wrapper>
        )
    }

    function renderCartItems() {
        return (
            <Wrapper>
                {cart.products.map(renderCartItem)}
            </Wrapper>
        )
    }

    function openModal() {
        modalRef.current?.showModal()
    }

    function closeModal() {
        modalRef.current?.close()
    }

    function renderConfirmOrderButton() {

        return (
            <button
                onClick={openModal}
                className='relative grid place-items-center bg-[#C73B0F] before:absolute before:w-full before:h-full before:bg-transparent hover:before:bg-[rgba(0,0,0,.25)] font-semibold text-white min-h-[53px] rounded-full overflow-hidden before:transition-colors before:duration-300 before:ease-out'>
                <span className='z-[1]'>Confirm Order</span>
            </button>
        )
    }

    function renderModal() {
        return (
            <dialog className='w-full max-w-[592px] rounded-t-xl md:rounded-[12px]' ref={modalRef}>
                <ModalContent order={cart} closeModal={closeModal} />
            </dialog>
        )
    }

    function renderContent() {
        if (cart.products.length === 0) {
            return renderEmptyCartContent()
        }

        return (
            <React.Fragment>
                {renderCartItems()}

                <Wrapper className='text-[#260F08] flex items-center justify-between'>
                    <span>Order Total</span>
                    <span className='font-bold text-[24px]'>${cart.total}</span>
                </Wrapper>

                <Wrapper className='text-[14px] text-[#260F08] flex flex-nowrap gap-2 rounded-lg bg-[#FCF8F6] p-4'>
                    <img src={carbonNeutralIcon} alt="" />
                    <span>
                        This is a <span className='font-semibold'>carbon-neutral</span> delivery
                    </span>
                </Wrapper>

                {renderConfirmOrderButton()}
            </React.Fragment>
        )
    }

    return (
        <Wrapper className="xl:self-start bg-white min-h-[299px] p-[24px] rounded-[12px] xl:min-w-[384px] flex flex-col gap-[24px]">
            <h2 className="font-bold text-[#C73B0F] text-[24px]">Your Cart ({cart.products.length})</h2>

            {renderContent()}

            {renderModal()}
        </Wrapper>
    )
}
