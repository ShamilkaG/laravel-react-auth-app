import React from "react";
import Navbar from "../common/navbar/Navbar.tsx";
import { useSelector } from "react-redux";
import type {RootState} from "../../store.tsx";
import ShoppingCartItem from "./ShoppingCartItem.tsx";

const ShoppingCart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10">
                {cartItems.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <ShoppingCartItem key={item.id} item={item} />
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">
                        Your cart is empty.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
