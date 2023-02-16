// import Header from "./components/Header";
import { useState } from "react";

function App() {
  // const clickMe = (name) => {
  //   console.log('Hello ' + name);
  // }
  const [title, setTitle] = useState("Hello World");

  const changeTitle = () => {
    setTitle("Title Change");
  }

  return (
    <div>
      {/* <Header /> */}
      <h1>{ title }</h1>
      <button onClick={ changeTitle }>Change Title</button>
    </div>
  );
}

export default App;