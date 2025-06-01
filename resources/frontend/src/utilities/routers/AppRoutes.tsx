import React from 'react';
import {Route, Routes} from "react-router";
import SignIn from "../../components/signIn/SignIn.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={
                <div>Dashboard</div>
            }
            />
        </Routes>
    );
};

export default AppRoutes;
