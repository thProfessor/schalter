import React ,{useState} from 'react'
import Counter from './Counter';
import CounterValue from './CounterValue';

function CounterContainer() {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount((prev)=>prev-1+2);
    }
    const decrement = () => {
        setCount((prev)=>prev-1)
    }
    const setValue = (e) => {
        setCount(e.target.value===""?1:e.target.value)
    }
    return (
        <>
           <Counter count={count} increment={increment} decrement={decrement} />
           <CounterValue setValue={setValue}/>
        </>
    )
}

export default CounterContainer
