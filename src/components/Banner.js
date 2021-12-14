import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
    return (

        <div className="lmj-banner">
            <img src={logo} alt='La maison jungle logo' className='lmj-logo' />
            <h1>Bienvenue sur la maison jungle !</h1>
        </div>
    )
}

export default Banner;