import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0) 
  return (
    <div>
        <h1 className='d-flex align-items-center justify-content-center '>count: {count}</h1>
        <div className='d-flex align-items-center justify-content-center '>
            <button className='btn btn-success' onClick={()=>setCount(count + 5)}>Increase</button>
            <button className='btn btn-danger' onClick={()=>setCount(count - 1)}>Decrease</button>
            <button className='btn btn-secondary' onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter