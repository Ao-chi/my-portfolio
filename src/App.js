import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { useState, useEffect, useRef } from "react";
import NotFoundPage from "./pages/404page/NotFoundPage";

function App() {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsNavbarFixed(!isNavbarFixed);
            } else {
                setIsNavbarFixed(isNavbarFixed);
            }
        };

        const throttledHandleScroll = throttle(handleScroll, 100);

        window.addEventListener("scroll", throttledHandleScroll);

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);

    const throttle = (callback, delay) => {
        let timeoutId = null;
        return (...args) => {
            if (timeoutId === null) {
                timeoutId = setTimeout(() => {
                    callback.apply(this, args);
                    timeoutId = null;
                }, delay);
            }
        };
    };
    return (
        <BrowserRouter>
            {/* className={` ${isNavbarFixed ? "fixed" : ""}`} */}
            <Header className={` ${isNavbarFixed ? "fixed" : ""}`} />
            {/* className={`${isNavbarFixed ? "fixed-top" : ""}`} */}

            <main className={`${isNavbarFixed ? "fixed-top" : ""}`}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
