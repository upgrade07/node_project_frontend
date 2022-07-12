import React, { useEffect, useState } from 'react'

const ApiCall = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    const url = 'http://localhost:3001/api/details';
    fetch(url).then((res)=>res.json())
    .then(res=>setData(res))
  },[])
  return (
    <div>
      {
        data.map((item)=>{
          return(
          <div>
          <h1>{item.name}</h1>
          <h1>{item.title}</h1>
          <img src={item.img} alt='not found'/>
          </div>
          )})
      }
    </div>
  )
}

export default ApiCall
