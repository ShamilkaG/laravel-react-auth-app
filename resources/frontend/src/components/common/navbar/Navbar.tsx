import React from "react";
import { useSelector } from "react-redux";
import type {RootState} from "../../../store.tsx";
import { Link } from "react-router";

const Navbar: React.FC = () => {
    const cartCount = useSelector(
        (state: RootState) => state.cart.cartItems.length,
    );
    return (
        <nav className="backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-indigo-700 tracking-wider bg-indigo-100 px-4 py-1 rounded-2xl shadow">
                    ModernShop
                </span>
                <div className="flex gap-6 items-center">
                    <Link
                        to="/dashboard"
                        className="text-gray-700 text-base font-medium hover:text-indigo-600 transition-all"
                    >
                        Home
                    </Link>
                    <a
                        href="#"
                        className="text-gray-700 text-base font-medium hover:text-indigo-600 transition-all"
                    >
                        Products
                    </a>
                    <Link to="/dashboard/shopping-cart" className="relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .96.316 1.138.796l.729 1.942M6.75 7.5h12.184a.75.75 0 01.733.944l-1.615 6.462a1.5 1.5 0 01-1.452 1.094H8.25m-3-8.5l-.324-.865M8.25 16.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8.25 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                        </svg>
                        <span className="bg-indigo-500 text-xs text-white rounded-full px-2 py-0.5 absolute -top-2 -right-4 opacity-75 group-hover:opacity-100">
                            {cartCount}
                        </span>
                    </Link>
                    <a
                        href="#"
                        className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 shadow-md"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
