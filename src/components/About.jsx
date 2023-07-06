import me from "../assets/me.jpg"
import Projects from "./Projects";


const About = ()=>{
    return (
        <>
        <main>
        <section className="about">
        <div className="u-center-text">
        <h2 className="heading-secondary u-margin-top-big">About me</h2>
        <div className="u-center-text">
                <img src={me} className="me"/>
            </div>
        </div>
        <div>
            <div>
            <p className="bio">
                Hi, my name is Bob. I love to code and come up with interesting solutions to problems.
                I have just completed a bootcamp in software engineering with <a href="https://northcoders.com/" target="_blank">Northcoders</a>
            </p>
               
            </div>
            
        </div>
        </section>
        
        
        </main>
        </>
    )
}

export default About;