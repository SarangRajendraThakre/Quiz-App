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

  <div className='main'>
    <div className="wrapper">
  
  <div className='spacer'>    <Header className="head"/></div>

  

<div className='overflowsidebar' ><Sidebar/>



</div>

  

  <div className='maincountainer'>  <Questionf/></div>
  

</div>

      
    </div>
    
  















    </>
  )
}

export default App


















