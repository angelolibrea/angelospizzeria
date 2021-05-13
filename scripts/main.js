var ranger = document.getElementById('ranger');
var image =  document.getElementById('pizzesizer');
var text = document.querySelector('.order section:first-child h3');
const imageSize = ['200px','250px','300px','350px'];
const imageText = [
'Small Pizza: 10 inches with 6 slices',
'Medium Pizza: 12 inches with 8 slices',
'Large Pizza: 14 inches with 10 slices',
'Extra-large Pizza: 18 inches with 12 slices']
ranger.onchange = function(){
    image.style.width = imageSize[ranger.value-1];
    image.style.height = imageSize[ranger.value-1];
    text.innerHTML = imageText[ranger.value-1];
}

function order(){
	let quantity1 = document.getElementById('quantity1').value;
	let quantity2 = document.getElementById('quantity2').value;
	if(quantity1!="0" && quantity2!="0"){
		let size1 = document.getElementById('size1').value;
		let size2 = document.getElementById('size2').value;
		alert(`You ordered ${quantity1} ${size1} Udacity Special and ${quantity2} ${size2} Cameron Special.`)			
	}else if(quantity1!="0"){
		let size = document.getElementById('size1').value;
		alert(`You ordered ${quantity1} ${size} Udacity Special.`)
	}else if(quantity2!="0"){
		let size = document.getElementById('size2').value;
		alert(`You ordered ${quantity2} ${size} Cameron Special.`)			
	}else{
		alert(`Please place your order.`)	
	}
}

function clearForm(){
	document.getElementById('quantity1').value = 0;
	document.getElementById('quantity2').value = 0;
	document.getElementById('size1').value = 'small';
	document.getElementById('size2').value = 'small';
}