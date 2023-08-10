import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { MyContext } from "./context/MyContext";
import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [shoes, setShoes] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    const getShoes = async () => {
        const res = await fetch("../src/data/shoes.json");
        let data = await res.json();
        setShoes(data);
    };

    useEffect(() => {
        getShoes();
    }, []);

    return (
        <>
            <MyContext.Provider
                value={{
                    shoes,
                    setShoes,
                    allProducts,
                    setAllProducts,
                    total,
                    setTotal,
                    countProducts,
                    setCountProducts,
                }}
            >
                <Header />                
                <AppRouter />
                <Footer />
            </MyContext.Provider>
        </>
    );
}

export default App;
