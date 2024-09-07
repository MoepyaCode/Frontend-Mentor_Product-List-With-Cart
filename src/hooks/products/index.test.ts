import { getTotalPrice } from "."

describe('Products Hooks', () => {
    test('Get Products Total', () => {
        expect(getTotalPrice(2, '10.00')).toBe('20.00')
    })
})