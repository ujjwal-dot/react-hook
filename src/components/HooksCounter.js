import React, { useEffect, useState } from 'react'

function HooksCounter() {
    const initialCount = 0
    const[count,setCount]=useState(initialCount)

    const increaseByFive=()=>{
        for(let i=0;i<5;i++){
            setCount((prevCount)=> prevCount+1)
        }
    }

   
  return (
    <div>
        Count {count} 
        <button onClick={()=>{setCount(initialCount)}}>Reset</button>
        <button onClick={()=>{setCount((prevCount)=> prevCount+1)}}>Inc</button>
        <button onClick={()=>{setCount((prevCount)=> prevCount-1)}}>Dec</button>
        <button onClick={increaseByFive}>Inc5</button>


    </div>
  )
}

export default HooksCounter