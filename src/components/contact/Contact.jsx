import React, { useRef, useState } from 'react'
import './Contact.css'
import { motion } from 'framer-motion';
import { BsEnvelope, BsWhatsapp, BsGithub, BsXCircle } from "react-icons/bs";
import emailjs from '@emailjs/browser';

function Contact() {
    const [message, setMessage] = useState({name:'', email:'', message:''})

    const onChange = (e)=>{
        setMessage({...message, [e.target.name]: e.target.value});
    }

    const [confirmationMessage, setconfirmationMessage] = useState('')
    const form = useRef();
    const onSubmit = (e)=>{
        e.preventDefault();

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if(message.email.charAt(message.email.length-4) !== '.' && message.email.charAt(message.email.length-3) !== '.'){
            setconfirmationMessage('Please enter correct email.')
            showMessage()
        }
        else if(regEx.test(message.email)  && message.email !== "")
        { 

        emailjs.sendForm('service_z50w3g5', 'template_yn7slxd', form.current, 'FDxWjFTWFd9Mx4n49')
        .then((result) => {
                setconfirmationMessage('Message has been sent successfully.')
                showMessage()
        }, (error) => {
            setconfirmationMessage('Server Error, Please try again later')
            showMessage()
        });
        }

        setTimeout(() => {
            closeMessage();
        }, 5000);
    }

    const showMessage = ()=>{
        let object = document.getElementById('message-box');
        object.style.transform = 'scaleX(1)'
        object.style.transformOrigin = '0% 50%'
    }
    const closeMessage = ()=>{
        let object = document.getElementById('message-box');
        object.style.transform = 'scaleX(0)'
        object.style.transformOrigin = '100% 50%'
    }
    setTimeout(() => {
        if(confirmationMessage === '')
            closeMessage();
    }, 100);
  return (
    <motion.div initial={{x:'500px'}} animate={{x:0, transition:{duration:.7, ease:'easeIn'}}} exit={{ x:'-100%', transition:{duration:.3, ease:'easeOut'}}} className="contact-p">
        <div className="left-c">
            <motion.div initial={{opacity:0, transform:'scale(0.5)'}} animate={{opacity:1, transform:'scale(1)', transition:{duration:.3, delay:.2}}}>
                <BsEnvelope className='c-icon'/>
                <p>m.abdulwahid008@gmail.com</p>
                <a className='c-link' href='mailto:m.abdulwahid008@gmail.com'>Write Me</a>
            </motion.div>
            <motion.div initial={{opacity:0, transform:'scale(0.5)'}} animate={{opacity:1, transform:'scale(1)', transition:{duration:.3, delay:.5}}}>
                <BsWhatsapp className='c-icon'/>
                <p>+92 334 3526 462</p>
                <a className='c-link' href='tel:+923349526462'>Write Me</a>
            </motion.div>
            <motion.div initial={{opacity:0, transform:'scale(0.5)'}} animate={{opacity:1, transform:'scale(1)', transition:{duration:.3, delay:.8}}}>
                <BsGithub className='c-icon'/>
                <p>mabdulwahid008</p>
                <a className='c-link' href='https://github.com/mabdulwahid008' target='#BLANK'>Go to Github</a>
            </motion.div>
        </div>
        <div className="right-c">
            <h4>Let's Discuss Your Project</h4>
            <motion.span initial={{width:'0px'}} animate={{width:'80px', transition:{duration:1.5, ease:'easeIn'}}}></motion.span>
            <motion.span initial={{width:'0px'}} animate={{width:'50px', transition:{duration:1.5, ease:'easeIn'}}}></motion.span>
           <form ref={form} onSubmit={onSubmit}>
               <div>
                   <input type="text" name="name" id="name" placeholder=' ' className='input' required onChange={onChange}/>
                   <span className="border-focus-up"></span>
                   <span className="border-focus-down"></span>
                   <label htmlFor="name" className='label' >Your Name</label>
               </div>
               <div>
                   <input type="email" name="email" id="eamil" placeholder=' ' className='input' required onChange={onChange}/>
                   <span className="border-focus-up"></span>
                   <span className="border-focus-down"></span>
                   <label htmlFor="email" className='label'>Your E-mail</label>
               </div>
               <div>
                   <textarea rows='6' cols='50' type="text" name="message" id="message" placeholder=' ' required className='textarea' onChange={onChange}></textarea>
                   <span className="border-focus-up"></span>
                   <span className="border-focus-down"></span>
                   <label htmlFor="message" className='label'>What's up in Your Mind</label>
               </div>
                   <button className='btn btn-form'>Send</button>
           </form>
           <div className='message' id='message-box'>
               <p>{confirmationMessage}</p>
                <BsXCircle className='xmark' onClick={closeMessage}/>
           </div>
        </div>
    </motion.div>
  )
}

export default Contact