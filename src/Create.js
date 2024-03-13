import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
    
    const [Name, setName] = useState()
    const [Age, setAge] = useState()
    const [Class, setClass] = useState()
    function run() {
       
        fetch("https://jsonserver-3.onrender.com/user", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name, Age, Class })
        })
        setName("")
    }
    return (
        <>
           
            <div className='create-container'>
                <label htmlFor="input">Name</label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} value={Name} />
                <label htmlFor="input">Title</label>
                <input type="text" onChange={(e) => { setAge(e.target.value) }} value={Age} />
                <label htmlFor="input">Blog</label>
                <input className='blogInput' type="text" onChange={(e) => { setClass(e.target.value) }} value={Class} />
                <Link className='Addbuttonlink' to="/Bloge"><button className='addButton' onClick={run}>Add</button></Link>
            </div>
        </>
    )
}
export default Create
