import { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState({
    name: "Trần Đình Huy",
    age: 18,
    address: "Bình Dương , Việt Nam",
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      description: "Hello ae ^^ tôi là người yêu màu hồng và ghét sự giả dối!",
    });
  };

  return (
    <div className="center">
      <h1>React App</h1>
      <p>{JSON.stringify(info)}</p>
      <button onClick={handleUpdate}>Update Profile User</button>
    </div>
  );
}

export default App;
