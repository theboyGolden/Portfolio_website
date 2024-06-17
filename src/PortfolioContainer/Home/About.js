import React from 'react'
import './About.css'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'
import cybersecurity from '../../assets/cyber-security.png'
import mobileApp from '../../assets/mobileApp.png'

export const About = () => {
  return (
    <div>
        <div className='aboutMe'> <span className='aboutMeHeader'>About Me</span> <br/>
        Hello! I'm Tsewoo Amenuveve Precious, a passionate and dedicated professional with a strong background in Frontend and Backend Development. 
        Currently studying at the University of Ghana, Legon, I specialize in Computer Science, consistently delivering exceptional results and driving projects to success.
        My journey in Frontend and Backend has been fueled by a deep curiosity and an unwavering commitment to excellence. 
        I have had the privilege of working on diverse projects that range from Computer Science department website, Student Grade Reporting System, UG medical record system, Golden Mart, RAMEVA Consult website etc.,
        each providing unique challenges and learning opportunities. This has equipped me with a versatile skill set and a dynamic 
        approach to problem-solving. I pride myself on my ability to ideas into reality, meet tight deadlines, work effectively in teams, blend technical expertise with
        creative solutions, and communicate complex ideas effectively, etc. My work ethic is driven by a desire to innovate and 
        exceed expectations, ensuring that every project I undertake not only meets but surpasses the client's vision.
        Outside of my professional life, I am passionate about exploring new technologies, gaming, designing creative solutions, watching movies etc. These interests not only enrich my life but also inspire my work, providing fresh perspectives and ideas.
        I am always eager to connect with like-minded professionals and explore new opportunities. Feel free to reach out to me to discuss potential collaborations, or simply to share ideas and insights. 
        Let's create something extraordinary together!
        </div>
        <div className='skillgridbox'>
            <div className='skillgrid'> 
                <img src={frontend} alt="frontendicon" className="frontendIcon"/> <br/><br/>
                <span className='frontend'> Frontend</span> 
            </div>
            <div className='skillgrid'> 
                <img src={backend} alt="backendicon" className="backendIcon"/><br/> <br/>
                <span className='backend'> Backend </span> 
            </div>
            <div className='skillgrid'> 
                <img src={cybersecurity} alt="cybersecurityicon" className="cybersecurityIcon"/> <br/><br/>
                <span className='cybersecurity'> Cybersecurity </span> 
            </div>
            <div className='skillgrid'>
                 <img src={mobileApp} alt="mobileAppicon" className="mobileAppIcon"/> <br/><br/>
                 <span className='mobileApp'> Mobile App </span>
                 </div>

        </div>
    </div>
  )
}
