import React, { useEffect, useState } from 'react'

function HooksMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

     const logMouse =e =>{
        console.log('Mouse Updated')
        setX(e.clientX)
        setY(e.clientY)
     }

    useEffect(()=>{
        console.log('Mouse render')
        window.addEventListener('mousemove',logMouse)
    },[])

  return (
    <div>
        Hook X-{x} Y-{y}
    </div>
  )
}

export default HooksMouse