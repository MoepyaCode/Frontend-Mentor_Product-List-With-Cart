import { useEffect } from "react"
import { ProductContainer, CartContainer } from "./components"
import { Wrapper, Container, Heading, Main } from "@app-components"
import { useAppDispatch, useAppSelector } from "@app-hooks"
import { setProducts } from "@app-store-features/products"
import { getProducts } from "@app-utils"
import { updateProductsInCart } from "@app-store-features/cart"
import { getUpdatedCartProducts } from "@app-hooks/cart"

export default function Home() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.products.products)

  useEffect(() => {
    if (!products) {
      getProducts()
        .then((products) => {
          dispatch(setProducts(products))
          return 'Products fetched successfully'
        })
        .then((message) => console.log(message))
        .catch((error) => console.error((error as Error).message))
    }
  }, [products, dispatch])

  useEffect(() => {
    if (products) {
      const cart = getUpdatedCartProducts(products)
      dispatch(updateProductsInCart(cart))
    }
  }, [products])

  return (
    <Main className="bg-[#FCF8F6] p-[24px] md:p-[40px] xl:px-[112px] xl:py-[88px] 2xl:grid 2xl:place-items-center">
      <Container className="flex flex-col xl:flex-row gap-[32px] xl:justify-between max-w-[1216px]">
        {/* #1 */}
        <Wrapper className="flex flex-col gap-[32px]">
          <Heading className="font-bold text-[#260F08] text-[40px] leading-[120%]">Desserts</Heading>
          <ProductContainer products={products} />
        </Wrapper>

        {/* #2 */}
        <CartContainer />
      </Container>
    </Main>
  )
}