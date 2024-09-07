import { getCartTotalPrice } from "."

describe('Cart Hook', () => {
    test('Get Cart Total', () => {
        const cartItems: Product[] = []

        const total = getCartTotalPrice(cartItems)
    })
})