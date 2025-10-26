import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "@/pages/Home";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

// Bài tập trên lớp
// 1. Tạo DefaultLayout: sử dụng cho Home, News, Contact
// 2. Tạo AuthLayout: sử dụng cho Login, Register

export default App;
