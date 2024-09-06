import { Wrapper } from '@app-components'
import illustrationEmptyCart from '@app-assets/icons/illustration-empty-cart.svg'

export default function CardContainer() {
    return (
        <Wrapper className="xl:self-start bg-white min-h-[299px] p-[24px] rounded-[12px] xl:min-w-[384px]">
            <h2 className="font-bold text-[#C73B0F] text-[24px]">Your Cart (0)</h2>

            <div className="py-[16px] flex flex-col gap-[16px] items-center">
                <img className="max-w-[128px] aspect-square" src={illustrationEmptyCart} alt="" />

                <h3 className="font-semibold text-[#87635A] text-[14px]">Your added items will appear here</h3>
            </div>
        </Wrapper>
    )
}
