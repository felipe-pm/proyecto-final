import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

const Detail = () => {

  const pesos = new Intl.NumberFormat("es-CL");
  const { shoes } = useContext(MyContext);
  const { allProducts, setAllProducts } = useContext(MyContext);
  const { countProducts, setCountProducts } = useContext(MyContext);
  const { total, setTotal } = useContext(MyContext);
  const { id } = useParams();
  const i = shoes.findIndex(x => x.id === id);
  const name = shoes[i].name

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
    setAllProducts([...allProducts, shoe])
  }

  return (
    <>
      <div className='detail-container'>
        <div className="detail">
            <div className="detail-left">
                <h2>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h2>
                <p>
                    <span>Características: </span>{shoes[i].data.join(", ")}
                </p>
                <p>
                    {shoes[i].desc}
                </p>
                <div className="buy">
                    <button onClick={() => addProduct(shoes[i])} className='add-detail'>
                        Agregar
                    </button>
                    <h3>${pesos.format(shoes[i].price)}</h3>
                </div>
            </div>
            <div className="detail-right">
                <div className="detail-img">
                    <img
                        src={shoes[i].img}
                        alt={name}
                    />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Detail
