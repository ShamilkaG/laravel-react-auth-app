export interface IProductDetails {
    id: string;
    product_name: string;
    product_description: string;
    product_price: string;
    product_qty: number;
    quantity: number
}

export interface IShoppingCartItemProp {
    item: IProductDetails;
}

export interface CartItem extends IProductDetails {
    quantity: number;
}

export interface CartState {
    cartItems: CartItem[];
}
