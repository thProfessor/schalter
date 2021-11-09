import React from 'react'

function CounterValue({setValue}) {
    return (
        <div>
           <h4 className="left__align__text">Counter Value</h4>
           <input className="input__count" type="number" onChange={setValue} />
        </div>
    )
}

export default CounterValue
