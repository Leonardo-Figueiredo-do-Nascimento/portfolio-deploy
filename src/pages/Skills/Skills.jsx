import './Skills.css'
import SkillCard from '../../components/Skill Card/SkillCard'

function Skills(){
    return(
        <div className="skills-root"  id="SKILLS">
            
            <h2>MY SKILLS</h2>            
            
            <h3 id='hard'>HARD SKILLS</h3>
            <div className="skills">
                <SkillCard img="java_icon-2.png" name="Java" level="Advanced"/>
                <SkillCard img="react-icon.png" name="React.js" level="Advanced"/>
                <SkillCard img="html5-icon.webp" name="HTML" level="Advanced"/>
                <SkillCard img="css-icon.png" name="CSS" level="Advanced"/>
                <SkillCard img="javascript-icon.png" name="Javascript" level="Advanced"/>
                <SkillCard img="spring-icon.png" name="Spring" level="Intermediate"/>
                <SkillCard img="node-icon.webp" name="Node.js" level="Intermediate"/>
                <SkillCard img="postgresql-icon.png" name="Postgresql" level="Intermediate"/>
                <SkillCard img="python-icon2.png" name="Python" level="Intermediate"/>
                <SkillCard img="cs-icon.png" name="C#" level="Intermediate"/>
                <SkillCard img="cpp-icon.png" name="C++" level="Intermediate"/>
                <SkillCard img="git_icon.png" name="Git" level="Intermediate"/>
                <SkillCard img="word-icon.png" name="Word" level="Intermediate"/>
                <SkillCard img="excel-icon.png" name="Excel" level="Basic"/>
                <SkillCard img="power-bi-icon.png" name="Power Bi" level="Basic"/>
            </div>
            <h3 id='soft'>SOFT SKILLS</h3>
            <div className="skills">
                <SkillCard img="teamwork.png" name="Teamwork"/>
                <SkillCard img="communication.png" name="Communication"/>
                <SkillCard img="creativity.png" name="Creativity"/>
                <SkillCard img="time-management.png" name="Time Management"/>
            </div>
            <h3 id='languages'>LANGUAGES</h3>
            <div className="skills">
                <SkillCard img="usa-icon.jpg" name="English" level="Advanced"/>
                <SkillCard img="brazil-icon.webp" name="Brazilian Portuguese" level="Advanced"/>
                <SkillCard img="spanish-icon.jpg" name="Spanish" level="Intermediate"/>
            </div>
        </div>
    )
}

export default Skills