function verificarNumeroPrimo(n){

    if(n<=1){
        return false;
    }

    if((n!=2) && (n%2==0)){
        return false;
    }

    for(leti=3;i<n;i+=2){
        if(n%i==0){
            return false;
        }
    }
    
    return true;
}

console.log(`0 é ${verificarNumeroPrimo(0)}`);
console.log(`1 é ${verificarNumeroPrimo(1)}`);
console.log(`2 é ${verificarNumeroPrimo(2)}`);
console.log(`3 é ${verificarNumeroPrimo(3)}`);
console.log(`7 é ${verificarNumeroPrimo(7)}`);
console.log(`83 é ${verificarNumeroPrimo(83)}`);
console.log(`100 é ${verificarNumeroPrimo(100)};`);
console.log(`991 é ${verificarNumeroPrimo(991)}`);
console.log(`104729 é ${verificarNumeroPrimo(104729)}`);
console.log(`14348907 é ${verificarNumeroPrimo(14348907)}`);