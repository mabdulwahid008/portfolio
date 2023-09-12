import React, { useState } from 'react'
import './Portfolio.css'
import { Projects } from '../../data/Projects.js'
import { motion } from 'framer-motion'

function Portfolio() {

    const [projects, setProjects] = useState(Projects)
    const handleProjects = (tag)=>{
        if(tag=== 'All'){
            setProjects(Projects);
            return;
        }
        tag = tag.split(',')
        console.log(tag);
        let newProjects = []
            for (let i = 0; i < tag.length; i++) {
                let x = Projects.filter((p)=>{ return p.tag.includes( tag[i] )})
                console.log(x);
                for (let j = 0; j < x.length; j++) {
                    newProjects.push(x[j])
                }
            }
        setProjects(newProjects)
    }
  return (
    <motion.div initial={{x:'300px'}} animate={{x:0, transition:{duration:.7, ease:'easeIn'}}} exit={{ x:'-100%', transition:{duration:.3, ease:'easeOut'}}} className='portfolio'>
        <div>
            <h3>Portfolio</h3>
            <motion.span initial={{width:'0px'}} animate={{width:'80px', transition:{duration:1.5, ease:'easeIn'}}}></motion.span>
            <motion.span initial={{width:'0px'}} animate={{width:'50px', transition:{duration:1.5, ease:'easeIn'}}}></motion.span>
        </div>
        <div className='p-buttons'>
            <button onClick={()=>{handleProjects('All')}}>All</button>
            <button onClick={()=>{handleProjects('Web3')}}>Web3</button>
            <button onClick={()=>{handleProjects('PERN')}}>PERN Stack</button>
            <button onClick={()=>{handleProjects('React-Js')}}>React JS</button>
            <button onClick={()=>{handleProjects('express')}}>Express JS</button>
        </div>
        <div className="projects">
            {projects.map(project=>{
                return<motion.div initial={{opacity:0, transform:'scale(.5)'}} animate={{opacity:1,transform:'scale(1)', transition:{duration:.2, delay:.2, ease:'easeIn'}}}>
                <img src={project.image} alt="" className='p-img'/>
                <div className='p-overlay'></div>
                <div className='p-content'>
                    <h5 className='p-name'>{project.name}</h5>
                    <div className='p-content-section'>
                        <div>
                            <p className='p-description'>{project.description}</p>
                        </div>
                        <div>
                            <a href={project.url} target='#BLANK' className='visit-site' >Visit Site <i className="fa-solid fa-arrow-up-right-from-square"/></a>
                        </div>
                    </div>
                </div>
            </motion.div>
            })}
        </div>
        {/* <div className="blur blur-p"></div> */}
    </motion.div>
  )
}

export default Portfolio