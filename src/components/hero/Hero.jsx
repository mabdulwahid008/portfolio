import React from 'react'
import './Hero.css'
import { BsHouseFill, BsInfoSquareFill, BsGrid1X2Fill, BsFillChatRightTextFill, BsGearFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';

function Hero() {

    const location = useLocation()

    const setColor = (color)=>{
        var r = document.querySelector(':root');
        r.style.setProperty('--yellow', color);
    }
    
  return (
      <>
        <input type="checkbox" id='toggle'/>
        <label className='nav-btn' htmlFor="toggle">
            <span></span>
        </label>
    <div className='aside'>
        <div className="logo">
            <h3><span>M</span>uhammad <br/> <span>A</span>bdulwahid</h3>
        </div>
        <ul className='nav'>
            <Link to='/'><BsHouseFill className={location.pathname==='/'? 'active icons' : 'icons'}/><li>Home</li></Link>
            <Link to='/about'><BsInfoSquareFill className={location.pathname==='/about'? 'active icons' : 'icons'}/><li>About</li></Link>
            <Link to='/portfolio'><BsGrid1X2Fill className={location.pathname==='/portfolio'? 'active icons' : 'icons'}/><li>Portfolio</li></Link>
            <Link to='/contact'><BsFillChatRightTextFill className={location.pathname==='/contact'? 'active icons' : 'icons'}/><li>Contact</li></Link>
        </ul>
        <div className="blur blur-hero"></div>
    </div>
    <input type="checkbox" id='color_toggle'/>
        <label htmlFor="color_toggle"> 
            <BsGearFill className='color-toggle'/>
        </label>
        <div className="color-palette">
            <span onClick={()=>{setColor('#F2AA4CFF')}}></span>
            <span onClick={()=>{setColor('rgb(180, 36, 173)')}}></span>
            <span onClick={()=>{setColor('rgb(255, 0, 85)')}}></span>
            <span onClick={()=>{setColor('#1cda91')}}></span>
            <span onClick={()=>{setColor('rgb(0, 193, 251)')}}></span>
        </div>
        <div className={location.pathname === '/' ? 'blur blur-h': ''}></div>
        <div className={location.pathname === '/about' ? 'blur blur-a': ''}></div>
        <div className={location.pathname === '/portfolio' ? 'blur blur-p': ''}></div>
        <div className={location.pathname === '/contact' ? 'blur blur-c': ''}></div>
    </>
  )
}

export default Hero