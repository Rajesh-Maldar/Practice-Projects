import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []); // Empty dependency array means this effect will only run once when the component mounts
  const [advice, setAdvice] = useState(null);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 style={{ margin: "16px" }}>{advice}</h1>
      <button
        style={{
          margin: "16px",
        }}
        onClick={getAdvice}
      >
        Get advice
      </button>
      <p>
        You have read <strong>{count}</strong> advices
      </p>
    </>
  );
}

export default App;
