import github from '../assets/github.svg'
import video from '../assets/video.svg'


const Projects = ()=>{
    return (
        <>
        <main>
        <section className="projects">
        <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" >Projects</h2>
        </div>
        <div className="project-container">
            <div className="project-item project-item--1">
                <h2>Park Me Bike</h2>
                <p className="project-description">
                A large part of my life is cycling.  As a final project in my northcoders bootcamp I was able to convince the team to create a cycle parking app.
                </p>
                <h3>User Stories</h3>
                <ul className="user-stories">
                    <li className="project-description">User can login or create new account</li>
                    <li className="project-description">User can view a map of all the cycle parking in an area</li>
                    <li className="project-description">User can move around and zoom in and out on the map to find cycle parking in different areas</li>
                    <li className="project-description">User can use the control panel to select the search radius</li>
                    <li className="project-description">User can use the control panel to select how many cycle parking places to show</li>
                    <li className="project-description">User can use the control panel to show the current traffic levels</li>
                    <li className="project-description">User can use the control panel to show a route to the cycle parking location</li>
                    <li className="project-description">User can click on a marker to check their bike into the cycle parking</li>
                    <li className="project-description">User can view their cycle parking history</li>
                    <a href='https://github.com/SmagicJones/ParkMeBike' target='_blank'>
                    <img src={github} className='social-logo'></img></a>
                    <a href='https://northcoders.com/projects/june-2023/park-me-bike' target='_blank'>
                    <img src={video} className='social-logo'></img>
                </a>
                </ul>  
            </div>
            <div className='project-item project-item--2'>
            <h2>NC news</h2>
            <p className="project-description">
                Front end project built with react for a reddit style news website
                </p>

            </div>
        </div>

        </section>
        </main>

        Hi

        
        </>
    )

}

export default Projects;