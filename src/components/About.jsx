import me from "../assets/me.jpg"


const About = ()=>{
    return (
        <>
        <main>
        <section className="about">
        <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" >About me</h2>
        </div>
        <div className="container">
            <div className="item item--1">
                Hi, my name is Bob. I love to code and come up with interesting solutions to problems.
                I have just completed a bootcamp in software engineering with Northcoders.
                I'd like to wish you a warm welcome to my portfolio site where you can check out what I'm working on 
                and get in contact with me for work or to collaborate.
            </div>
            <div className="item item--2">
                <img src={me} className="me"/>
            </div>
        </div>
        </section>
        
        </main>
        </>
    )
}

export default About;