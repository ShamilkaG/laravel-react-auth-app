import { useDispatch } from "react-redux";
import React from "react";
import { IProductDetails } from "../../utilities/types/product/product";
import { addToCart } from "../../utilities/slices/product/CartSlice.tsx";

interface IProductCardProp {
    product: IProductDetails;
}
const ProductCard: React.FC<IProductCardProp> = ({ product }) => {
    const dispatch = useDispatch();
    const productAddToCart = (product: IProductDetails) => {
        dispatch(addToCart(product));
    }

    return (
        <div className="group bg-white/70 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-2xl rounded-2xl p-4 transition-all flex flex-col relative overflow-hidden">
            <div className="relative rounded-xl overflow-hidden h-44 bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center mb-4">

            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">
                {product.product_name}
            </h3>
            <div className="flex items-center mb-2">
            </div>
            <p className="text-gray-500 text-base mb-4 line-clamp-2">
                {product.product_description}
            </p>
            <div className="flex justify-between items-center mt-auto">
                <div className="text-xl font-semibold text-indigo-700">
                    ${product.product_price}
                </div>
                <button
                    onClick={() => productAddToCart(product)}
                    className={`inline-block px-4 py-2 rounded-xl font-semibold text-sm transition-all shadow bg-gradient-to-tr from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600`}
                >
                    Add to Cart
                </button>
            </div>
            <span className="absolute right-4 top-4 text-indigo-100 text-6xl opacity-10 pointer-events-none select-none">
                {product.product_name.charAt(0)}
            </span>
        </div>
    );
};

export default ProductCard;
