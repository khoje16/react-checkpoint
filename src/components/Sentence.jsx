import React, { useState } from 'react'

const Sentence = () => {
    const [name, setName] = useState('Clinton')
   
    const [age, setAge] = useState(42)
    
    const [job, setJob] = useState('developer')
    
    const changeBio=()=>{
        setName("Chidera")
        setAge(99)
        setJob("chef")
    }
  return (
    <div>
        <h1>Hello! I'm {name}, a {age}year-old {job} from Nigeria</h1>
        <button className='btn btn-primary' onClick={changeBio}>Click to change bio</button>
    </div>
  )
}

export default Sentence