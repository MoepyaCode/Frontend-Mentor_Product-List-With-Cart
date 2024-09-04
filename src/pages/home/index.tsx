import { useEffect, useState } from "react"
import { Wrapper, Container, Heading, Main } from "@app-components"
import { ProductContainer, CardContainer } from "./components"

export type Image = {
  desktop: string,
  mobile: string,
  tablet: string,
  thumbnail: string,
}

export type Product = {
  category: string,
  image: Image,
  name: string,
  price: number,
}

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    console.log('products', products)
    if (!products) {
      fetch('/src/utils/data.json')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data)
        })
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
        <CardContainer />
      </Container>
    </Main>
  )
}