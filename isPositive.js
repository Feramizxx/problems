function square(num){
return isPositive(num)? num**2: 0
}


function isPositive(num){
if(num!==null && num>0){
return true;
}

}


console.log(square(-3))