
export const singleCartItem = {
    "product-type": "hoodie",
    options: {
        size: "small",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}

export const singleBasePrice = [{
    "product-type": "hoodie",
    options: {
        colour: ["white", "dark"],
        size: ["small", "medium"]
    },
    "base-price": 3800,
}]

export const multipleCartItems = [{
    "product-type": "hoodie",
    options: {
        size: "small",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}, {
    "product-type": "hoodie",
    options: {
        size: "medium",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}]

export const multipleBasePrices = [{
    "product-type": "hoodie",
    options: {
        colour: ["white", "dark"],
        size: ["small", "medium"]
    },
    "base-price": 3800,
}, {
    "product-type": "sticker",
    options: {
        size: ["small"]
    },
    "base-price": 221
},]

export const twoCartItems = [{
    "product-type": "hoodie",
    options: {
        size: "small",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}, {
    "product-type": "sticker",
    options: {
        size: "small"
    },
    "artist-markup": 10,
    quantity: 1
}]

export const multipleBasePricesWithDiffOptions = [{
    "product-type": "hoodie",
    options: {
        colour: ["white", "dark"],
        size: ["small", "medium"]
    },
    "base-price": 3800,
}, {
    "product-type": "hoodie",
    options: {
        size: ["large"],
        colour: ["white"]
    },
    "base-price": 3848
},]

export const singleCartItemVariation = {
    "product-type": "hoodie",
    options: {
        size: "large",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}

export const twoCartItemsVariation = [{
    "product-type": "hoodie",
    options: {
        size: "small",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}, {
    "product-type": "hoodie",
    options: {
        size: "large",
        colour: "white",
        printlocation: "front"
    },
    "artist-markup": 20,
    quantity: 1
}]