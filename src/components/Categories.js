import { plantList } from "../datas/plantList"

function Categories({categorieView, changeCat}){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return(
        <select>
            <option value={'none'} onClick={(e)=> displayCat(e.target.value)}>--CATÉGORIES--</option>
            {categories.map((cat) => (
					<option key={cat} onClick={(e)=> displayCat(e.target.value)} value={cat}>{cat}</option>
				))}
        </select>
    )
    function displayCat(value){
        changeCat(value)
    }
}



export default Categories