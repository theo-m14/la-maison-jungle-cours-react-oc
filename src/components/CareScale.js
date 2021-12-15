function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧'

	return (
		<div onClick={(e)=> {e.stopPropagation(); displayCareScaleInfo(scaleValue,careType)}}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function displayCareScaleInfo(scaleValue,careType){
	alert(`C'est un composant de type ${careType}`);
	let scaleQuantity;
	switch(scaleValue){
		case 1:
			scaleQuantity = 'peu';
			break;
		case 2:
			scaleQuantity = 'modérèment'
			break;
		default:
			scaleQuantity = 'beaucoup'
	}
	alert(`Cette plante requiert ${scaleQuantity} ${careType === 'water' ? "d'arrosage" : "de lumière"}`);
}

export default CareScale