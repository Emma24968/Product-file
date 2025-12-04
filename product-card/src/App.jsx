import { useState } from "react";
import "./App.css";
import { Product } from "./Product";
import { Food } from "./Food";
import { Sports } from "./Sports";
import { Funiture } from "./Funiture";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Product
        title="Clothing "
        price={1000}
        InStock={0}
        category={["pants", "Sweater", "Shoe", "bag"]}
      />
      <Food
        title="Food "
        price={30}
        available={0}
        category={["Rice", "Fries", "Bozanno pie", "Pork"]}
      />
      <Sports
        title="Sports "
        Price={50}
        InStock={null}
        Category={["Football", "Cricket", "Ruby", "Golf"]}
      />
      <Funiture title='Funiture' price={150} InStock={true} Category={['Couch','Table','Sofa','Chair']} />
    </>
  );
}

export default App;
