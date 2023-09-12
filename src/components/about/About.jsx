import React from 'react'
import './About.css'
import { BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function About() {
  return (
    <motion.div initial={{x:'500px'}} animate={{x:0, transition:{duration:.7, ease:'easeIn'}}} exit={{ x:'-100%', transition:{duration:.3, ease:'easeOut'}}} className="about">
      <div>
          <h3>About</h3>
          <motion.span initial={{width:'0px'}} animate={{width:'80px', transition:{duration:1.5, ease:'easeIn'}}}></motion.span>
          <motion.span initial={{width:'0px'}} animate={{width:'50px', transition:{duration:1.5, ease:'easeIn'}}}></motion.span>
          <h4>My name is Muhammad Abdulwahid and <span>I develop websites.</span></h4>
          <p>Hi There! I am a student of Software Engineering who persuaded interest in Web Development. I have been developing and customizing websites as a MERN & PERN stack dev for 2 years. 
              <br/>Now I am learning Web3 stack to develop decentralized functionality for building our future more secure. My aim is to design custom content and a well structured web applications for end users.</p>
          <p>GRACIAS</p>
      </div>
      <div className='a-section'>
        <div className='contact'>
            <h3>Contacts</h3>
            <div><BsEnvelope className='a-icon'/> <p>m.abdulwahid008@gmail.com</p></div>
            <div><BsWhatsapp className='a-icon'/> <p>+92 334 9526 462</p></div>
        </div>
        <div className='education'>
            <h3>Tools</h3>
            <div>
                <div>
                  <p>JavaScript</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'90%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>HTML & CSS</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'90%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>SQL</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'90%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Mongo DB</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'80%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Ethers JS</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'50%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Solidity / Hardhat</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'70%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
        </div>
        <div className='skils'> 
            <h3>Skills</h3>

            <div>
                <div>
                  <p>React JS</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'90%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Express Js</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'85%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Next Js</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'70%', transition:{duration:.9, delay:1}}} className="proress-value" ></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>IPFS</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'90%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Thirdweb SDK</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'75%', transition:{duration:.9, delay:1}}} className="proress-value" ></motion.div>
                </div>
            </div>
            <div>
                <div>
                  <p>Github</p>
                </div>
                <div className="progress-bar">
                  <motion.div initial={{width:'0px'}} animate={{width:'80%', transition:{duration:.9, delay:1}}} className="proress-value"></motion.div>
                </div>
            </div>

        </div>
      </div>

      <div className='a-buttons'>
        <a href='CV-MAbdulwahid.pdf' download='CV-MAbdulwahid.pdf'><button className='btn'>Resume</button></a>
        <Link to='/contact'><button className='btn'>Hire  ME</button></Link>
      </div>
      {/* <div className="blur blur-a"></div> */}
    </motion.div>
  )
}

export default About