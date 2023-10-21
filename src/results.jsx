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

function Result() {
  const [selection, setSelection] = useState([]);
  const [count, setCount] = useState(0)
  const patlist = JSON.parse(localStorage.getItem("doctor"))
  const disease = Object.keys(patlist)
  const docarray = patlist[disease]
  
  console.log(docarray)
  const Card = ()=>{
    return <div>
        <div className=''>
    <div className='container flex bg-blue-100 rounded-3xl h-[100px] mx-auto mt-1'>
        <div className='w-[50px] ml-12 mt-[25px]'><img src='src/speedy.png' className=''/></div>
    <div className='ml-10'><h1 className='font-roboto pt-6 font-bold text-xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-700 '>{patlist[1]}</h1>
    <ul className='text-l font-roboto text-left text-black mt-1 '>
        <li>Specialization in cardiology</li>
     </ul>
     </div>
        </div>
        </div> 
    </div>
  }

  return (
    <>
    <video className='videoTag fixed h-screen ' autoPlay loop muted>
    <source src={video} autoPlay loop  type='video/mp4' />
</video>
    <div className='main'>
    
   <nav className='bg-slate-950 text-white py-[10px] w-full backdrop-blur-lg fixed bg-opacity-30 top-0 left-0 z-50'>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex ">
        <img src="src/vedyalogo.png" class="h-10 -mt-1 mr-3 -ml-4" alt="Project Manager" />
    </a>
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-blue-500 rounded md:p-0 hover:text-white font-roboto font-bold" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 font-roboto font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>

        <li>
          <a href="#" class="block py-2 pl-3 pr-4  text-gray-900 font-roboto font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-7
          00 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <li>
          <a href="/signup" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-blue-700 font-roboto font-normal" aria-current="page">Sign Up</a>
        </li>
        <li>|</li>
        <li>
          <a href="/login" class="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-blue-700 font-roboto font-normal" aria-current="page">Log In</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    
    <div className='pt-[40px]' >
    <div className='mx-auto w-full bg-black'>
    <Fade bottom>
        <div className='bg-blue-950 h-[170px]'>
        <div className='container mx-auto'>
        <h1 className='font-bold pt-12 font-roboto text-4xl text-left text-transparent mt-12 bg-clip-text bg-gradient-to-r from-blue-100 to-slate-900  '>You might have {disease}</h1>
        <p className='text-xl text-left font-roboto text-white mt-4 '>We have suggested you some doctors with relevant Speciality</p>
        </div>
        </div>
    <div className=''>
    <div className='container flex bg-blue-100 rounded-3xl h-[100px] mx-auto mt-8'>
        <div className='w-[50px] ml-12 mt-[25px]'><img src='src/logocopyblue (1).png' className=''/></div>
    <div className='ml-10'><h1 className='font-roboto pt-6 font-bold text-xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-700 '>Dr. {docarray[0]}</h1>
    <ul className='text-l font-roboto text-left text-black mt-1 '>
        <li>Specialization in {disease}</li>
     </ul>
     </div>
        </div>
        </div> 
        <div className=''>
    <div className='container flex bg-blue-100 rounded-3xl h-[100px] mx-auto mt-1'>
        <div className='w-[50px] ml-12 mt-[25px]'><img src='src/logocopyblue (1).png' className=''/></div>
    <div className='ml-10'><h1 className='font-roboto pt-6 font-bold text-xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-700 '>Dr. {docarray[1]}</h1>
    <ul className='text-l font-roboto text-left text-black mt-1 '>
        <li>Specialization in {disease}</li>
     </ul>
     </div>
     <div className=''>
        <img src='src/calllogo.png' className='h-6 mt-8 ml-[700px]'/>
     </div>
     <div className=''>
        <img src='src/location copy.png' className='h-[50px] mt-5 ml-[20px]'/>
     </div>
        </div>
        </div> 
        <div className=''>
    <div className='container flex bg-blue-100 rounded-3xl h-[100px] mx-auto mt-1'>
        <div className='w-[50px] ml-12 mt-[25px]'><img src='src/logocopyblue (1).png' className=''/></div>
    <div className='ml-10'><h1 className='font-roboto pt-6 font-bold text-xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-700 '>Dr. {docarray[2]}</h1>
    <ul className='text-l font-roboto text-left text-black mt-1 '>
        <li>Specialization in {disease}</li>
     </ul>
     </div>
        </div>
        </div> 
         
        
        </Fade>
    </div>  
    </div>
    </>
  )
}

export default Result
