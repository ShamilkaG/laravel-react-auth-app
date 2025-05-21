import React from 'react';
import {Route, Routes} from "react-router";
import SignIn from "../../components/signIn/SignIn.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    );
};

export default AppRoutes;
