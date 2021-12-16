import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'

function ShoppingList({ cart, updateCart, categorieView, changeCat }) {

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	//On regarde si aucune catégorie n'est selectionné 
	if(categorieView==='none'){
		return (
			<div className='lmj-shopping-list'>
				<Categories categorieView={categorieView} changeCat={changeCat}/>
				<ul className='lmj-plant-list'>
					{plantList.map(({ id, cover, name, water, light, price, category }) => (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					))}
				</ul>
			</div>
		)
	}else{ //Si on a selectionné une catégorie, on affiche seulement les plantes si référant
		let plantDisplay = plantList.filter((plant) => plant.category === categorieView)
		return (
			<div className='lmj-shopping-list'>
				<Categories categorieView={categorieView} changeCat={changeCat}/>
				<ul className='lmj-plant-list'>
					{plantDisplay.map(({ id, cover, name, water, light, price, category }) => (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					))}
				</ul>
			</div>
		)
	}
}

export default ShoppingList