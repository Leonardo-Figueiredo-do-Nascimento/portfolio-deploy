import './About.css'
import ExperienceCard from '../../components/Experience Card/ExperienceCard'

function About(){
    return(
        <div className="about-root" id="ABOUT">
            
            <h3 className='about-titles'>Who am I</h3>            
            <h4 className='about-h4'>
                I am a Brazilian full-stack developer with a bachelor's degree in computer science and currently pursuing a 
                second degree. I seek a remote developer position where my skills and knowledge can be valuable, productive, and bring positive results to the company.
            </h4>
            
            <h3 className='about-titles'>My experience</h3>
            <div className='jobs'>
                <ExperienceCard 
                    img="computer_technician_02.jpg" 
                    job="Tech Support Internship" 
                    time="6 months"
                    description="I provided technical consultation to diagnose and troubleshoot client issues, performed software installations on both local and client systems, and handled computer assembly and repair"
                />
            </div>
            <h3 className='about-titles'>My work philosophy</h3>
            <h4 className='about-h4'>
                Although I am currently located in Brazil, I live by a motto:
            </h4>
            <div className='motto'>
                <h2>MY LOCATION</h2>
                <h2 className='is-not'>IS NOT</h2>
                <h2>MY LIMITATION</h2>
            </div>
            <h4 className='about-h4' id='about-end'>
                So if your company is located in America, in Europe or in any other part of the world, I can be the solution for your company problem. 
            </h4>
        </div>
    )
}

export default About