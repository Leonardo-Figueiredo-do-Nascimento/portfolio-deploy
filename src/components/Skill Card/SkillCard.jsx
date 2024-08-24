import './SkillCard.css'

function SkillCard(props){
    return (
        <div className="skill-div">
            <img src={`/languages and skills/${props.img}`}/>
            <h3>{props.name}</h3>
            {props.level ? <label>Level:</label> : <></>}
            <h4>{props.level}</h4>
        </div>
    )
}

export default SkillCard