import React,{useState,useEffect} from 'react'

const Clockfunctional = () => {
    const initialState ={
        nombre:'Diego',
        apellidos:'Bonilla Villa'
    }

    const [date, setDate] = useState(new Date());
    const [edad,setEdad] = useState(0);

    function refreshClock(){
        setDate(new Date());
    }
    function upedad() {
        setEdad(edad+1)
    }
    useEffect(()=>{
        const timerId = setInterval(refreshClock,1000);
        return function cleanup(){
            clearInterval(timerId);
        };
    },[]);

    useEffect(()=>{
        const interval=setInterval(()=>{
            upedad()
        },1000);
        return () => clearInterval(interval);
    },[edad]);

    return (
        <div>
            <h2>Hora Actual: {date.toLocaleTimeString()}</h2>
            <h3>{initialState.nombre} {initialState.apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
  )
}

export default Clockfunctional