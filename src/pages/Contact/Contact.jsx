import './Contact.css'

function Contact(){
    return(
        <div className="contact-root" id="CONTACT">
            <h2>Here are the ways you can contact the solution for your problems</h2>
            <div className="contacts">
                <h3 id='phone'><img src="build/Photos/phone-icon.png"/><p>:</p> +55 16 99290-1043</h3>
                <h3 id='linkedin'><img src="build/Photos/linkedin-icon2.png"/><p>:</p> <a href="https://www.linkedin.com/in/leonardo-figueiredo-do-nascimento-087724231/?locale=en_US" target='_blank'> Linkedin</a></h3>
                <h3 id='gmail'><img src="build/Photos/gmail-icon.png"/> <p>:</p> leonardofigueiredodonascimento@gmail.com</h3>
                <h3 id='else'>If you'd like to establish contact through a specific messaging app or another means of communication, 
                    please inform me through one of the three contacts above.</h3>
            </div>
        </div>
    )
}

export default Contact