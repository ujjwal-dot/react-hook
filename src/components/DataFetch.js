import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetch() {
    const[posts,setPosts] = useState([])
    const[id,setId] = useState(1)
    const[idFromClick,setidFromClick] = useState(1)

   const handleClick=()=>{
        setidFromClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromClick])

  return (
    <div>
        <input type='text' onChange={e=>setId(e.target.value)}/>
        <button onClick={handleClick}>Fetch Data</button>
        <div>{posts.title}</div>

        {/* <ul>
            {posts.map(post =><li key={post.id}>{post.title}</li>)}
        </ul> */}

    </div>
  )
}

export default DataFetch