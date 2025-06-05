import React, { useCallback } from "react";
import DeleteSvg from "../common/svg/DeleteSvg.tsx";
import type {IShoppingCartItemProp} from "../../utilities/types/product/product";
import { useDispatch } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
    incrementQuantityByButton,
} from "../../utilities/slices/product/CartSlice.tsx";

const ShoppingCartItem: React.FC<IShoppingCartItemProp> = ({ item }) => {
    const dispatch = useDispatch();
    const { id, product_name, product_price, quantity } = item;

    const handleDecrement = useCallback(() => {
        dispatch(decrementQuantity(id));
    }, [dispatch, id]);

    const handleIncrement = useCallback(() => {
        const quantity = 1;
        const itemId = id;
        dispatch(incrementQuantityByButton({ itemId, quantity }));
    }, [dispatch, id]);

    const handleQuantityChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newQty = Math.max(1, parseInt(e.target.value, 10) || 1);
            const itemId = id;
            const quantity = newQty;
            dispatch(incrementQuantity({ itemId, quantity }));
        },
        [dispatch, id],
    );

    return (
        <li key={id} className="flex items-center justify-between py-4">
            <div className="flex items-center">
                <div>
                    <h3 className="text-lg font-medium">{product_name}</h3>
                    <p className="text-gray-500">${product_price}</p>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleDecrement}
                            aria-label="Decrease quantity"
                            className="bg-gray-200 text-gray-700 rounded px-2 py-1 hover:bg-gray-300 transition"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            name="quantity"
                            onChange={handleQuantityChange}
                            className="text-center w-10"
                            min={1}
                        />
                        <button
                            onClick={handleIncrement}
                            aria-label="Increase quantity"
                            className="bg-gray-200 text-gray-700 rounded px-2 py-1 hover:bg-gray-300 transition"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <button
                // onClick={() => dispatch(removeFromCart(id))}
                aria-label="Remove item"
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
                <DeleteSvg />
            </button>
        </li>
    );
};

export default ShoppingCartItem;
