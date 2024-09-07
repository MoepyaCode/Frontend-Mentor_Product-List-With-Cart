import { Money, Currencies } from "ts-money";

export function getTotalPrice(quantity: number, price: string) {
    const money = new Money((parseFloat(price) * 100), Currencies.USD);
    return money.multiply(quantity).toString();
}

