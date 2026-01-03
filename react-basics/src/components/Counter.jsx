import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);    
  }

  function decrement() {
  setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
}


function reset(){
    setCount(0);
}

function increment_5(){
    setCount(count + 5);
}

return (
    <div>
        <h1>Counter App</h1>
      <h2>Counter: {count}</h2> 

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count ===0} className={count === 0 ? "disabledBtn": "activeBtn"}>Decrement</button>
      <button onClick={reset} disabled={count===0}>Reset</button>
      <button onClick={increment_5}>Increment by 5</button>
    </div>
);
}   

export default Counter;