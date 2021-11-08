import React, {useState} from "react";

function Counter(){

    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter+1)
    const decrement = () => { 
            if (counter<=0){
                setCounter(0)
            }
            else {
                setCounter(counter-1)
            }
        }

    return (<div>
        <h1>Increment and Decrement App</h1>
        <button onClick={increment}>+</button>
        <span> {counter} </span>
        <button onClick={decrement}>-</button>
    </div>
    )
}


export default Counter