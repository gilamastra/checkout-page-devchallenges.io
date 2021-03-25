window.onload = function(){
let contadorProd1 = 0;
let product1remove =  document.getElementById("less-product-1");
let amountprod1 =  document.getElementById("amountProd1");



let contadorProd2 = 0;
let product2remove =  document.getElementById("less-product-2");
let amountprod2 =  document.getElementById("amountProd2");

let total =  document.getElementById("total");
let totalPrice = 19.99;



window.formEnviado = function(){
    document.onsubmit = function(){
        alert('form sent successfully')
    }
}
window.diminuirProduto1 = function(){
    if(contadorProd1 > 0){
        contadorProd1 = contadorProd1-1;
        amountprod1.innerText = contadorProd1
        totalPrice = totalPrice - 54.99;
        total.innerText =  '$' + totalPrice.toFixed(2) ;
    }
}
window.aumentarProduto1 = function(){
    if(contadorProd1 >= 0){
        contadorProd1 = contadorProd1 +1;
        amountprod1.innerText = contadorProd1
        total.innerText = totalPrice;

    }

    if(totalPrice > 18.99){
        totalPrice = totalPrice + 54.99;
        total.innerText =  '$' +  totalPrice.toFixed(2) ;


    }

}





window.diminuirProduto2 = function(){
    if(contadorProd2 > 0){
        contadorProd2 = contadorProd2-1;
        amountprod2.innerText = contadorProd2
        totalPrice = totalPrice - 74.99;
        total.innerText =  '$' + totalPrice.toFixed(2) ;
    }
}
window.aumentarProduto2 = function(){
    if(contadorProd2 >= 0){
        contadorProd2 = contadorProd2 +1;
        amountprod2.innerText = contadorProd2
        total.innerText = totalPrice;

    }

    if(totalPrice > 18.99){
        totalPrice = totalPrice + 74.99;
        total.innerText =  '$' +  totalPrice.toFixed(2) ;


    }

}








}