// import Header from "./components/Header";
import { useState } from "react";

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

  return (
    <div>
      {/* <Header /> */}
      {/* <h1>{ title }</h1>
      <button onClick={ changeTitle }>Change Title</button> */}
      <ul>
        {products.map((product) => (
          <li key={ product.id }> { product.title } | { product.price }</li>
        ))}
      </ul>
    </div>
  );
}

export default App;