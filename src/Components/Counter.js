import React from 'react'
import './Counter.styles.css';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { IconContext } from "react-icons";

function Counter({count,increment,decrement}) {
    return (
        <div className="counter__container">
            <IconContext.Provider value={{ size:"1.5em",style: { verticalAlign: 'middle' }  }}>
             <button className="btn light" onClick={decrement}><AiOutlineMinus/></button>
             <h1 className="count__value">{count}</h1>
            <button className="btn dark" onClick={increment}><AiOutlinePlus/></button>
            </IconContext.Provider>
        </div>
    )
}

export default Counter
