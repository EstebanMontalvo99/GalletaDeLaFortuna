import React, { useState } from "react";
import "./App.css";
import quotes from "./utils/quotes.json";
import QuoteBox from "./components/QuoteBox";
import ButtonBox from "./components/ButtonBox";
import image from "./utils/images.json";
function App() {
  const randomElementFromArray = (arr) => {
    const randomIndex = Math.floor([Math.random() * arr.length]);
    return arr[randomIndex];
  };
  const handleClick = () => {
    setQuote(randomElementFromArray(quotes));
    setImg(randomElementFromArray(image));
  };
  const [quote, setQuote] = useState(randomElementFromArray(quotes));
  const [img, setImg] = useState(randomElementFromArray(image));
  return (
    <div className="App" style={{ backgroundImage: img.img }}>
      <h1>GALLETA DE LA FORTUNA</h1>
      <QuoteBox quote={quote} />
      <ButtonBox handleClick={handleClick} color={img.color} />
    </div>
  );
}

export default App;
