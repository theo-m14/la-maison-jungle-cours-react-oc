import '../styles/PlantItem.css'
import CareScale from './CareScale'

function PlantItem({name,cover,id,light,water}){
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
						{name}
                        <img src={cover} alt={name + 'cover'} className='lmj-plant-item-cover'/>
                        <CareScale scaleValue={light} careType='light'/>
                        <CareScale scaleValue={water} careType='water' />
        </li>
    )   
}

function handleClick(plantName){
    alert(`Tu viens de cliquer sur la plante : ${plantName}`);
}

export default PlantItem