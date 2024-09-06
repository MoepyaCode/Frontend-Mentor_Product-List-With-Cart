import { Wrapper } from '@app-components'
import ProductCard from '../product-card'

interface Props {
    products: Product[] | null
}

export default function ProductContainer(props: Props) {

    return (
        <Wrapper className='flex flex-wrap gap-[24px] justify-center md:justify-between'>
            {props.products?.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                />
            ))}
        </Wrapper>
    )
}