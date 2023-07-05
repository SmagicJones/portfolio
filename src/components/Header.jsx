
import bobLogo from '../assets/bob-teaches-logo.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import email from '../assets/email.svg'

const Header = ()=>{
    return(
        <header className='header'>
            <div className='header__logo-box'>
                <img src={bobLogo} className='header__logo'></img>
            </div>
            <div className='header__title'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Portfolio</span>
                    <span className='heading-primary--sub'>Bob Holland</span>
                </h1>
                <a href="#" className='btn btn--white btn--animated open-modal' onClick={()=>{modal.showModal()}}>Contact</a>

                <dialog className='modal' id='modal'>
                <button className='close-modal' onClick={()=>modal.close()}> X </button>
                <div>
                    <img src={bobLogo} className='modal__logo'></img>
                </div>
                
                <h2>At your service</h2>
                <p>You can contact me in any of the following ways</p>
                <a href='https://www.linkedin.com/in/robert-holland-codes/' target='_blank'>
                    <img src={linkedin} className='social-logo'></img>
                </a>
                <a href='https://github.com/SmagicJones' target='_blank'>
                    <img src={github} className='social-logo'></img>
                </a>
                <a href="mailto:mail@bobteaches.com">
                <img src={email} className='social-logo'></img>
                </a>
                <footer className='modal-footer'>
               
                </footer>
                
                </dialog>


            </div>
        </header>
    )
}

export default Header; 