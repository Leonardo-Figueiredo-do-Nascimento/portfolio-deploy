import './Project.css'

function Project(props){
    return (
        <div className="project-div">
            <h2 className='rank'>{props.rank}</h2>
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <div className='tech-stack'>
                {props.techStack.map((tech, index)=>(
                    <img className="tech-used" src={`/languages and lkills/${tech}`}/>
                ))}
            </div>

            <div className="project-links">
                {props.video ? <a href={props.video} target="_blank" className='yt-video'><img src="/photos/youtube-icon.png"/>Video</a> : <></>}
                {props.repository ? <a href={props.repository} target="_blank" className='git-repo'><img src="/photos/github-icon2.png"/> Repository</a> : <></>}
            </div>
            
        </div>
    )
}

export default Project