import { CartItem, BasePrice, ProductOptions } from '../types/appTypes'

const getProperty = (obj: ProductOptions, key: keyof ProductOptions) => {
    return obj[key];
}

const calculateCartItemPrice = (cartItem: CartItem, basePrices: BasePrice[]): number => {

    // Step 1: Find prices of the same product type first
    const sameTypeBasePrices = basePrices.filter((price) => price['product-type'] === cartItem['product-type']);

    // Step 2: Confirm the relevant keys for product option (As per instruction the first record in the list of base prices includes the relevant options)
    const optionKeys = Object.keys(sameTypeBasePrices[0].options)

    // Step 3: Find the right base price to use for calculation

    const foundPriceInfo = sameTypeBasePrices.find((priceInfo) => {

        // Looking through all the relevant options and making sure all are satisfied before finding the basePrice
        let optionMatched = false;

        optionKeys.forEach((optionKey) => {

            const option = getProperty(priceInfo.options, optionKey)
            const cartItemOption = getProperty(cartItem.options, optionKey)

            if (!option.includes(cartItemOption)) {
                optionMatched = false;
                return
            }
            optionMatched = true;
        })

        if (optionMatched || optionKeys.length === 0) {
            return priceInfo
        }
    })

    let singleItemPrice = 0;

    if (foundPriceInfo) {
        const basePrice = foundPriceInfo['base-price']

        singleItemPrice = (basePrice + (basePrice * cartItem['artist-markup'] / 100)) * cartItem.quantity

    }

    return Math.floor(singleItemPrice)
}

export default calculateCartItemPrice