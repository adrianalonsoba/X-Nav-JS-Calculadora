
var op1;
var op2;
var result;

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function clickOne(){
	changer('display','1');
}

function clickZero(){
	changer('display','0');
}

function clickPlus(){
	if(document.getElementById('display').innerHTML===''){
		alert('Elige el primer operando');
	}else{
		op1=parseInt(document.getElementById('display').innerHTML);
		changer('display','');
	}

}

function clickEqual(){
	if(document.getElementById('display').innerHTML===''){
		alert('Elige el segundo operando');
	}else{
		op2=parseInt(document.getElementById('display').innerHTML);
		if(op1-op2===0){
			result=0;
		}else{
			result=op1+op2;
		}
		changer('display',result);
	}
}