import bobLogo from '../assets/bob-teaches-logo.svg'

const Footer = () =>{
    return (
        <>
            <footer className="footer">
                <img src={bobLogo} className='header__logo'></img>
                <h3>Bob Holland 2023</h3>
            </footer>
        </>
    )
}

export default Footer