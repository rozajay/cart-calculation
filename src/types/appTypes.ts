export interface CartItem {
    "product-type": string;
    options: Object;
    "artist-markup": number;
    quantity: number
}

export interface BasePrice {
    "product-type": string;
    options: Object;
    "base-price": number;
}

export interface ProductOptions {
    [key: string]: any
};
