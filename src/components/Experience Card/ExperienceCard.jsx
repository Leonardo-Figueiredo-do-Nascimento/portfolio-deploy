import './ExperienceCard.css'

function ExperienceCard(props){
    return (
        <div className="experience-div">
            <img className='img-job' src={`build/Photos/${props.img}`}/>
            <h3 id='job'>{props.job}</h3>
            <h4 id='time'><img src="build/Photos/clock.png"/>  {props.time}</h4>
            <h4 id='description'>{props.description}</h4>
        </div>
    )
}

export default ExperienceCard