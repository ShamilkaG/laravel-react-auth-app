import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.tsx";
import Navbar from "../common/navbar/Navbar.tsx";
import axios from "axios";
import { IProductDetails } from "../../utilities/types/product/product";
const Products: React.FC = () => {
    const [productDetails, setProductDetails] = useState<IProductDetails[]>([]);

    useEffect(() => {
        fetchProducts().then();
    }, []);
    const fetchProducts = async () => {
        const response = await axios.get("api/get-products-details");

        if (response.status === 200) {
            setProductDetails(response.data.product_details);
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {productDetails.map((product: IProductDetails) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
