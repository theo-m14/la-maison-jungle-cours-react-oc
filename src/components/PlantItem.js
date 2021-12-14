import '../styles/PlantItem.css'
import CareScale from './CareScale'

function PlantItem({name,cover,id,light,water}){
    return (
        <li key={id} className='lmj-plant-item'>
						{name}
                        <img src={cover} alt={name + 'cover'} className='lmj-plant-item-cover'/>
                        <CareScale scaleValue={light} careType='light'/>
                        <CareScale scaleValue={water} careType='water' />
        </li>
    )   
}

export default PlantItem