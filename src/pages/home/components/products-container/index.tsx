import { Wrapper } from '@app-components'
import ProductCard from '../product-card'
import { useAppSelector } from '@app-hooks'

export default function ProductContainer() {
    const products = useAppSelector(state => state.products.products)

    return (
        <Wrapper className='flex flex-wrap gap-[24px] justify-center md:justify-between'>
            {products?.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                />
            ))}
        </Wrapper>
    )
}