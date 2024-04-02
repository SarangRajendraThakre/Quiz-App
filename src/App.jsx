import React from 'react'
import { MdStars } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { IoIosColorPalette } from "react-icons/io";
import './App.css'
import { AiOutlineEye } from "react-icons/ai";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Questionf from './components/Questionf';




const App = () => {
  return (<>

<Header className="head"/>

<div className='flex flex-row ' ><Sidebar/>

<Questionf/></div>















    </>
  )
}

export default App


















