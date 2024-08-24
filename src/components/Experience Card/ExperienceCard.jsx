import './ExperienceCard.css'

function ExperienceCard(props){
    return (
        <div className="experience-div">
            <img className='img-job' src={`/photos/${props.img}`}/>
            <h3 id='job'>{props.job}</h3>
            <h4 id='time'><img src="/photos/clock.png"/>  {props.time}</h4>
            <h4 id='description'>{props.description}</h4>
        </div>
    )
}
export default ExperienceCard