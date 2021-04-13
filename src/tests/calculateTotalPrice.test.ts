import { singleBasePrice, singleCartItem, multipleCartItems, multipleBasePrices, twoCartItems, multipleBasePricesWithDiffOptions, singleCartItemVariation, twoCartItemsVariation } from './testData/index'
import calculateCartItemPrice from '../utils/calculateCartItemPrice'
import { default as testBasePrices } from "./testData/base-prices.json"
import { default as testData01 } from "./testData/cart-4560.json"
import { default as testData02 } from "./testData/cart-9363.json"
import { default as testData03 } from "./testData/cart-9500.json"
import { default as testData04 } from "./testData/cart-11356.json"
import { default as testData05 } from "./testData/emptyOptions.json"


describe("Caclculate Total Price for items of the same product type (with options being the same)", () => {

    it("Calculate for one item in cart and one base price", () => {
        expect(calculateCartItemPrice(singleCartItem, singleBasePrice)).toEqual(4560)
    })

    it("Calculate for multiple items in cart and one base price", () => {
        let sum = 0
        multipleCartItems.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, singleBasePrice)
        })
        expect(sum).toEqual(9120)
    })

})


describe("Caclculate Total Price for items of the different product type (with options being the same)", () => {

    it("Calculate for one item in cart and two base prices", () => {
        expect(calculateCartItemPrice(singleCartItem, multipleBasePrices)).toEqual(4560)
    })

    it("Calculate for two items in cart and two base prices", () => {
        let sum = 0
        twoCartItems.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, multipleBasePrices)
        })
        expect(sum).toEqual(4803)
    })

})

describe("Caclculate Total Price for items of the same product type (options are different)", () => {

    it("Calculate for one item in cart and two base prices", () => {
        expect(calculateCartItemPrice(singleCartItem, multipleBasePricesWithDiffOptions)).toEqual(4560)
        expect(calculateCartItemPrice(singleCartItemVariation, multipleBasePricesWithDiffOptions)).toEqual(4617)

    })

    it("Calculate for two items in cart and two base price", () => {
        let sum = 0
        twoCartItemsVariation.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, multipleBasePricesWithDiffOptions)
        })
        expect(sum).toEqual(9177)
    })
})

describe("Calculate with provided test data", () => {

    it("Test file cart-4560.json", () => {
        let sum = 0
        testData01.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, testBasePrices)
        })
        expect(sum).toEqual(4560)
    })

    it("Test file cart-9363.json", () => {
        let sum = 0
        testData02.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, testBasePrices)
        })
        expect(sum).toEqual(9363)
    })

    it("Test file cart-9500.json", () => {
        let sum = 0
        testData03.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, testBasePrices)
        })
        expect(sum).toEqual(9500)
    })

    it("Test file cart-11356.json", () => {
        let sum = 0
        testData04.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, testBasePrices)
        })
        expect(sum).toEqual(11356)
    })

    it("Test emptyOptions.json", () => {
        let sum = 0
        testData05.map((cartItem) => {
            sum = sum + calculateCartItemPrice(cartItem, testBasePrices)
        })
        expect(sum).toEqual(13000)
    })
})