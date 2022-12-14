import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/me.jpg'
import { motion } from 'framer-motion'
import './Home.css'

function Home() {
  return (
    <motion.div initial={{x:'500px'}} animate={{x:0, transition:{duration:.7, ease:'easeIn'}}} exit={{ x:'-100%', transition:{duration:.3, ease:'easeOut'}}} className='home'>
        <div className="home-left">
            <h3>Hi There! I'm <br/> <span>Muhammad Abdulwahid</span></h3>
            <h4>and I'm <span>Web Developer</span></h4>
            <p>I don't always clop, but when I do, I do it for the design. Design is somehing that our businesses are lacking.</p>
            <Link to='/contact'><button className='btn'>Hire Me</button></Link>
        </div>
        <div className="home-right">
        <div>
                <motion.div initial={{x:300}} animate={{x:0, transition:{duration:2}}}></motion.div>
                <motion.img initial={{opacity:0}} animate={{opacity:1, transition:{duration:2}}} src={img} alt="" />
            </div>
        </div>
    </motion.div>
  )
}

export default Home