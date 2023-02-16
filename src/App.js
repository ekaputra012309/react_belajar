// import Header from "./components/Header";
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  // const clickMe = (name) => {
  //   console.log('Hello ' + name);
  // }
  // const [title, setTitle] = useState("Hello World");

  // const changeTitle = () => {
  //   setTitle("Title Change");
  // }
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ])

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div>
      {/* <Header /> */}
      {/* <h1>{ title }</h1>
      <button onClick={ changeTitle }>Change Title</button> */}
      <ProductList products = { products } deleteProduct={ deleteProduct } />
    </div>
  );
}

export default App;