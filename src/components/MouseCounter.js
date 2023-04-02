import React, { useEffect, useState } from 'react'
import HooksMouse from './HooksMouse'

function MouseCounter() {
    const[dispaly,setDisplay] = useState(true)

    
  return (
    <div>
        <button onClick={()=>setDisplay(!dispaly)}>Toggle Display</button>
        {dispaly&&<HooksMouse/>}
    </div>
  )
}

export default MouseCounter