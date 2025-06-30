import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Value</h1>
      <p>{count}</p>
      <button onClick={handleCount}>Click me</button>
    </>
  )
}

export default App
