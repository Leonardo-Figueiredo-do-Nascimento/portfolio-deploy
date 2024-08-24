import './Home.css'

function Home(){
    return(
        <div className="home-root" id="HOME">
            <img className='portfolio-photo' src="public/photos/foto portfolio.png"/>
            <h2 className='caption'><span className='hi'>Hi</span>, I'm Leonardo Figueiredo do Nascimento</h2>
            <h3 className='caption-pt2'>The <span className='full-stack'>full-stack</span> developer your company is looking for.</h3>
            <h3 className='catch'>Now that I've got your attention, allow me to get your interest.</h3>
            <a href="#CONTACT" className='contact-button'>CONTACT ME</a>
        </div>
    )
}

export default Home