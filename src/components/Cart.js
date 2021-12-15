import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
                <button onClick={() => deleteItemCart(name,price)}>X</button>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)

  function deleteItemCart(name,price){
    //On regarde si la cart contient bien la plante
    const currentPlant = cart.find((plant) => plant.name === name);
    //Si jamais on a bien une plante qui porte ce nom alors
    if(currentPlant){
      //Je récupère la plante en question
      const cartFilteredCurrentPlant = cart.filter((plant)=> plant.name !== name);
      //Puis j'update sa quantité
      updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlant.amount - 1 }])
      //Je vérifie ici si la quantité est égale à 1, car updateCart n'a pas encore retiré le montant voulu, je regarde l'état d'avant
      if(currentPlant.amount===1){
        updateCart(cart.filter((plant)=> plant.amount!==1));
      }
    }
  }
}



export default Cart