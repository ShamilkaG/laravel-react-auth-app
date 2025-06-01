import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "../../components/signIn/SignIn.tsx";
import { useSelector } from "react-redux";
import {
    checkUserAuthentication,
    checkUserIsAdmin,
    checkUserTokenNotEmpty,
} from "./CheckUserAuthentication.ts";
import { Navigate } from "react-router-dom";
import Products from "../../components/products/Products.tsx";
import type {RootState} from "../../store.tsx";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart.tsx";

const requireAdminAccess = (
    isAuthenticated: boolean,
    token: string,
    user_role: number,
    component: React.JSX.Element,
): React.JSX.Element => {
    return checkUserAuthentication(isAuthenticated) &&
    checkUserTokenNotEmpty(token) &&
    checkUserIsAdmin(user_role) ? (
        component
    ) : (
        <Navigate to="/" replace />
    );
};

const AppRoutes: React.FC = () => {
    const { token, user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.auth,
    );

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={requireAdminAccess(
                    isAuthenticated,
                    token,
                    user_role,
                    <Products />,
                )}
            />
            <Route
                path="/dashboard/shopping-cart"
                element={requireAdminAccess(
                    isAuthenticated,
                    token,
                    user_role,
                    <ShoppingCart />,
                )}
            />
        </Routes>
    );
};

export default AppRoutes;
