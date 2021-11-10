import React ,{useState,useEffect} from 'react'
import Counter from './Counter';
import CounterValue from './CounterValue';
import api from '../utils/api';
import Loader from './Loader';

function CounterContainer() {
    const [count, setCount] = useState(1);
    const [postCount,setPostCount] = useState("");
    const [max,setMax] = useState(1000);
    const [load,setLoad] = useState(false);

    const userValue = async() => {
        const response = await api.get("/front-end/utkarshShukla.json");
        return response;
    }

    const postValue = async(e) => {
        e.preventDefault();
        setLoad(true);
        const request = {
            utkarshShukla:postCount,
        }
       const res =  await api.put("/front-end.json",request);
    
       setLoad(false);
       setCount(res.data.utkarshShukla);
    }

    const postMax = (e) => {
        setMax(e.target.value==null?1000:e.target.value);
    }

    const increment = () => {
        if(count+1<=max){
        setCount((prev)=>prev-1+2);
        }
    }

    const decrement = () => {
        setCount((prev)=>prev-1<1?1:prev-1)
    }

    const setValue = (e) => {
        if(e.target.value<=max){
         setCount(e.target.value)
        }else if(e.target.value===""){
            setCount(1);
        }
    }

    const postCountSetValue = (e) => {
        setPostCount(e.target.value);
    }

    useEffect(() => {
        const getValue = async () => {
        const value = await userValue();

            if(value.data){
                setCount(value.data);
            }else{
                setCount(1);
            }
        }

        getValue();
    }, []);

    return (
        <>
        {
            load && <Loader/>
        }
           <Counter count={count} increment={increment} decrement={decrement} />
           <CounterValue setValue={setValue} postValue={postValue} postCountSetValue={postCountSetValue} postMax={postMax}/>
        </>
    )
}

export default CounterContainer
