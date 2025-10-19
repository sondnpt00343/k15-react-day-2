import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
