import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Bloge from './Bloge'
import Create from './Create'
import "./index.css"
import Aboute from './Aboute'

const App = () => {
    return (
        <div className='appContainer'>
            <Router>
                <nav>
                    <div style={{ marginTop: "5px", marginLeft: "15px" }}><h1 style={{ color:"#db0154",fontVariant: 'small-caps', textDecoration: "underline" }}>Blog-Adda</h1></div>
                    <div style={{ marginLeft: "40px" }}>
                        <Link to="/"><button>About</button></Link>
                        <Link to="/Create"><button>Create</button></Link>
                        <Link to="/Bloge"><button>Blog</button></Link>
                    </div>

                </nav>
                <Routes>
                    <Route path='/Bloge' element={<Bloge />} />
                    <Route path='/Create' element={<Create />} />
                    <Route path='/' element={<Aboute />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
