import React from 'react'

function CounterValue({setValue,postValue,postCountSetValue,postMax}) {
    return (
        <div className="container__value__container">
           <h4 className="left__align__text">Counter Value</h4>
           <input className="input__count" type="number" onChange={setValue} placeholder="type here"/>
           <label>Enter Default Value</label>
           <input className="input__count" type="number" onChange={postCountSetValue} />
           <button className="btn submit" onClick={postValue}>Save default value</button>
           <label>Enter Max Value</label>
           <input className="input__count" type="number" onChange={postMax} />
        </div>
    )
}

export default CounterValue
