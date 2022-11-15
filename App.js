import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);

    const increaseNum = () => {
        setCounter((prevValue) => {
            return prevValue + 1;
        })
    }

    const decreaseNum = () => {
        setCounter((prevValue) => {
            return prevValue - 1;
        })
    }

    return ( <
        >
        <
        h1 > { counter } < /h1>   <
        button onClick = { increaseNum } > Increase < /button>  <
        button onClick = { decreaseNum } > Decrease < /button>


        <
        />
    )
}




export default App;