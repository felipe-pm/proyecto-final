import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

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
        setTotal(total + shoe.price * shoe.qty)
        setCountProducts(countProducts + shoe.qty)
        return setAllProducts([...products])
    }
    
    setTotal(total + shoe.price * shoe.qty)
    setCountProducts(countProducts + shoe.qty)
    setAllProducts([...allProducts, shoe]);
};

  const navigate = useNavigate();
  const handleClick = (shoe) => {
    navigate(`/${shoe.id}`)
  }

  return (
    <div className='home-container'>
        <div className="home">
            {shoes.map((shoe) => (
                <div className="card" id={shoe.id} key={shoe.id}>
                    <div className="img-container" onClick={() => handleClick(shoe)}>
                        <img
                            src={shoe.img}
                            alt={shoe.name}
                        />
                    </div>
                    <h2 onClick={() => handleClick(shoe)}>
                        {shoe.name.charAt(0).toUpperCase() + shoe.name.slice(1)}
                    </h2>
                    <p>
                        👟 {shoe.data[0]}
                    </p>
                    <p>
                        👟 {shoe.data[1]}
                    </p>
                    <p>
                        👟 {shoe.data[2]}
                    </p>
                    <p>
                        👟 {shoe.data[3]}
                    </p>
                    <button onClick={() => addProduct(shoe)}>
                        Agregar ${pesos.format(shoe.price)}
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home
