import './App.css'
import { useState} from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState('blue')
  const handleClick = (action) => {
    return ()=>{
      action === 'increment'? setCount(count + 1) : setCount(count - 1)

    }
  }

  return (
    <div className="App" 
    style={{
      backgroundColor: color,
    }}>
      <h1>State in React !</h1>
      <h2>The Count is : {count}</h2>
      <button onClick={handleClick('increment')}>Increment</button>
      <button onClick={handleClick('decrement')}>Decrement</button>
      <button onClick={()=> setColor('dodgerblue')}>Click to change the color</button>
    </div>
  )
}

export default App
