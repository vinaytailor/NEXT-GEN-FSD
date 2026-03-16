// eslint-disable-next-line no-unused-vars
import React,{use,useEffect,useState} from 'react'
export default function App() {
  let [products, setProducts]= useState([]);

async function fetchProducts () {
  try{
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    setProducts(data.products);
  } catch (error) {
    console.log("Error fetching products", error)
  }
}
useEffect(()=> {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchProducts();
}, []);
console.log(products);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product)=>(
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price:${product.price}</p>
            <img src={product.images[0]} alt={product.title} style={{width: "150px"}} />
          </div>
        ))}
      </div>
      <button onClick={fetchProducts}>Fatch Prduct</button>
    </div>
  )
}
