import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
    const pesos = new Intl.NumberFormat("es-CL");
    const { shoes } = useContext(MyContext);
    const { allProducts, setAllProducts } = useContext(MyContext);
    const { countProducts, setCountProducts } = useContext(MyContext);
    const { total, setTotal } = useContext(MyContext);

    const addProduct = (shoe) => {
        if (allProducts.find((item) => item.id == shoe.id)) {
            const products = allProducts.map((item) =>
                item.id === shoe.id ? { ...item, qty: item.qty + 1 } : item
            );
            setCountProducts(countProducts + 1);
            setTotal(total + shoe.price);
            return setAllProducts([...products]);
        }
    };

    const detailProduct = (shoe) => {
        if (shoe.qty == 1) {
            deleteProduct(shoe)
            return
        }

        if (allProducts.find((item) => item.id == shoe.id)) {
            const products = allProducts.map((item) =>
                item.id === shoe.id ? { ...item, qty: item.qty - 1 } : item
            );
            setCountProducts(countProducts - 1);
            setTotal(total - shoe.price);
            return setAllProducts([...products]);
        }
    };

    const deleteProduct = (shoe) => {
        const results = allProducts.filter(
            item => item.id !== shoe.id
        )

        setTotal(total - shoe.price * shoe.qty)
        setCountProducts(countProducts - shoe.qty)
        setAllProducts(results);
    }

    const deleteCart = () => {
        setAllProducts([])
        setCountProducts(0)
        setTotal(0)
    }

    return (
        countProducts ?
        <div className="cart-container">
            <div className="cart">
                <div className="cart-left">
                    {allProducts.map((shoe) => (
                        <div className="cart-card" id={shoe.id} key={shoe.id}>
                            <div className="card-left">
                                <div className="img-cart">
                                    <img
                                        src={shoe.img}
                                        alt={shoe.name}
                                    />
                                </div>
                                <div className="title-total">
                                    <h2>
                                        {shoe.name.charAt(0).toUpperCase() + shoe.name.slice(1)}
                                    </h2>
                                    <p>
                                        ${pesos.format(shoe.price)}
                                    </p>
                                </div>
                            </div>
                            <div className="card-right">
                                <i onClick={() => detailProduct(shoe)} className="fa-solid fa-minus"></i>
                                <p className="each-qty">{shoe.qty}</p>
                                <i onClick={() => addProduct(shoe)} className="fa-solid fa-plus"></i>
                                <p className="subtotal">${pesos.format(shoe.price * shoe.qty)}</p>
                                <i onClick={() => deleteProduct(shoe)} className="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    ))}
                    <button className="delete-cart" onClick={() => deleteCart()}>Vaciar Carro</button>
                </div>
                <div className="cart-right">
                    <h2>Resumen</h2>
                    <div className="amount">
                        <p>Cantidad:</p>
                        <p className="amount-products">{countProducts} zapatillas</p>    
                    </div>
                    <div className="total">
                        <p>Total:</p>
                        <p className="total-products">${pesos.format(total)}</p>
                    </div>
                    <button className="pay">Pagar</button>
                </div>
            </div>
        </div> : 

        <div className="cart-container">
            <div className="empty">
                <p>Carro Vacío</p>
            </div>
        </div>
    )
};

export default Cart;
