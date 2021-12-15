import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type='test' onBlur={(e) => verifEmail(e.target.value) && setInputValue(e.target.value)}></input>
		</footer>
	)
}

function verifEmail(mail){
    if(!mail.includes('@'))
        {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
            return false;
        }else return true;
}

export default Footer