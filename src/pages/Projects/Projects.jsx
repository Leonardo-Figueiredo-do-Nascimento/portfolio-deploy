import './Projects.css'
import Project from '../../components/Project Card/Project'
function Projects(){
    return(
        <div className="projects-root" id="PROJECTS">
            <h4 className='projects-h4'>These are the best projects that I have developed with my skills</h4>
            <Project rank={1} name='Worldlet' 
                description={"Worldlet is a project I developed to represent how a world wide digital wallet would work,"
                    + " it allows you to store money in different currencies, convert currencies, transfer money between users and make deposits and withdrawals."}
                techStack={["react-icon.png","css-icon.png","javascript-icon.png","java_icon-2.png","spring-icon.png","postgresql-icon.png"]} 
                video={"https://www.youtube.com/watch?v=Tw-nwPtSzJ0"} repository={"https://github.com/Leonardo-Figueiredo-do-Nascimento/Worldlet"}/>
            <Project rank={2} name='Gameployee' 
                description={"This one has a special place in my heart, this was my final project in college,"+
                    "the idea was an application that could facilitate the employment process in the game industry."+
                    "It was developed for both users looking for a job offer and companies looking for skilled employees."+
                    " (The video is in portuguese because my college required a video presentation, but it's basically me explaining the "+
                    "project structure and how the application works.)"} 
                techStack={["react-icon.png","css-icon.png","javascript-icon.png","node-icon.webp","postgresql-icon.png"]}
                video={"https://youtube.com/watch?v=KsWkGdRW3t4"} repository={"https://github.com/Leonardo-Figueiredo-do-Nascimento/Gameployee"}/>
            <Project rank={3} name='This Portfolio'
                description={"Everything you saw until now was made with React and my skills in CSS."}
                techStack={["react-icon.png","css-icon.png","javascript-icon.png"]} video={""} repository={""}/>
            <Project rank={4} name='Full-Stack To-Do List'
                description={"I thought the idea of a To-Do List was simple, so I made something more complex, "+
                    "although it has 'To-Do List' in the name, it's more like a schedule where you can note down appointments and times, edit or delete them, and there's an animation for when you complete or fail to complete a task."} 
                techStack={["react-icon.png","css-icon.png","javascript-icon.png","node-icon.webp","postgresql-icon.png"]} 
                video={"https://www.youtube.com/watch?v=rgj-jfDJczE"} repository={"https://github.com/Leonardo-Figueiredo-do-Nascimento/Full-Stack-ToDo-List"}/>
            <Project rank={5} name='Push-up Counter Algorithm' 
                description={"This was my part in a project I developed with a team in my third year in college,"
                    +" I was responsible to develop the algorithm in python with OpenCV and MediaPipe to count the number of push-ups in a video."}
                techStack={["python-icon2.png"]} video={""} repository={"https://github.com/Leonardo-Figueiredo-do-Nascimento/Contador-de-flex-es-em-video"}/>
        </div>
    )
}

export default Projects