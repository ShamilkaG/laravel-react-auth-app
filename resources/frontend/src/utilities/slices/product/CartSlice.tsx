import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {CartState, IProductDetails} from "../../types/product/product";

const findItemById = (state: CartState, id: string) => {
    return state.cartItems.find(item => item.id === id);
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IProductDetails>) {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id,
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        // removeFromCart(state, action: PayloadAction<number>) {
        //     state.cartItems = state.cartItems.filter(
        //         (item) => item.id !== action.payload
        //     );
        // },
        // clearCart(state) {
        //     state.cartItems = [];
        // },
        incrementQuantity(state, action: PayloadAction<object>) {
            const {itemId, quantity} = action.payload;

            console.log({ quantity });

            const existing = findItemById(state, itemId);
            if (existing) {
                existing.quantity = quantity;
            }
        },
        incrementQuantityByButton (state, action: PayloadAction<object>) {
            const {itemId, quantity} = action.payload;

            console.log({ quantity });

            const existing = findItemById(state, itemId);
            if (existing) {
                existing.quantity += quantity;
            }
        },
        decrementQuantity(state, action: PayloadAction<string>) {
            const existing = findItemById(state, action.payload);
            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
                }
            }
        },
    },
});

export const { addToCart, incrementQuantity, incrementQuantityByButton, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
