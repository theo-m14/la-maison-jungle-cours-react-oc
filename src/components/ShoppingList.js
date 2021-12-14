import { plantList } from '../datas/plantList'

function ShoppingList() {
    let listPlant = [];
    plantList.forEach(plant => {
        listPlant.push(plant.name)
    });
    let categories = [];
    let catExist;
    //On parcours notre data de plante
    plantList.forEach(plant =>{
        //Ici on dit la catégories n'existe pas dans le tableau
        catExist = false;
        //On parcours le tableau pour savoir si la catégories existe déjà
        categories.forEach(element =>{
            //Si la catégories est déjà rentré on met le boolean correspondant en true
            if(element==plant.category){
                catExist = true;
            }
        })
        //Si on a pas trouvé d'occurance de la catégorie dans le tableau on la crée
        if(catExist == false) categories.push(plant.category);
    })

	return (

        <div>
            <ul>
              {
                  categories.map((categorie) => (<li key={categorie}>{categorie}</li>))
              }
            </ul>
            <ul>
            {
                listPlant.map((plant)=> (<li key={plant}>{plant}</li>))
            }
            </ul>
        </div>
        
    )
}

export default ShoppingList