import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login'
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}