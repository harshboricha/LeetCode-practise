let sum=1
function factorial(n){

if(n!=1){

    sum = sum * (n)
    console.log(sum,n,(n-1))
    return  factorial(n-1)
}else{
    return console.log(sum)
}

}

factorial(5)