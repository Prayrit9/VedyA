import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, TextInput } from '@mantine/core'
import { Container } from '@mantine/core'
import FadeInSection from './fade'
import Fade from 'react-reveal/Fade';
import Demo from './animation'
import video from 'src/assets/bgvid1.mp4'
import SearchBar from './SearchBar';
import axios from 'axios'
import { MultiSelect } from '@mantine/core'
import loginform from './loginform'



function App() {
    const [in1, setIn1] = useState("");
    const [in2, setIn2] = useState("");


    const hi1 = (e) => {
        setSelection(e.target.value);
    }
    const hi2 = (e) => {
        setSelection1(e.target.value);
    }
  return (
    
    <>
    
    <div className='h-screen bg-gradient-to-r from-blue-300 bg-blue-950 py-5'>
    <div className=''>
    <img src='src/logo copy.png' className='h-[200px] ml-[610px] mt-[120px]'/>
    <h1 className='  font-medium text-[45px] text-center mt-[20px] text-blue-200  '>Sign in to VedyA</h1>
    </div>
    <div className='text-center'>
        <input className='w-[300px] h-10 mt-8 rounded-3xl text-center' placeholder='Username' onChange={(e)=>setIn1(e.target.value)}></input>
    </div>
    <div className='text-center'>
        <input type='password' className='w-[300px] h-10 mt-3 rounded-3xl text-center' placeholder='Password' onChange={(e)=>setIn2(e.target.value)}></input>
    </div>
    <div className='text-center mt-8'>
        <button className='bg-gradient-to-r from-blue-400 bg-blue-300 text-white rounded-3xl w-[100px] h-8 font-semibold' onClick={(e)=>{
            const endp = ""
            axios.post("/login",[in1,in2]).then(res=>{
                const data = res.data
            }
                )
        }}>
            Sign In
        </button>
    </div>
    </div>
    </>
  )
}

export default App