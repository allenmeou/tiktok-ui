import { useState } from "react";
import "./App.css";

const gifts = ["CPU i9", " RAM 32GB RGB", "RGB KEYBOARD"];

function App() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy phần thường</button>
    </div>
  );
}

export default App;
