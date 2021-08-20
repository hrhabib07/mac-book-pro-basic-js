// code for memory section 
document.getElementById('memory-increase').addEventListener('click', function(){
    changeValue('memory-cost', 180);
    updateTotal();
});
document.getElementById('memory-default').addEventListener('click', function(){
    changeValue('memory-cost', 0);
    updateTotal();
});


// code for Storage section 

document.getElementById('storage-default').addEventListener('click', function(){
    changeValue('storage-cost', 0);
    updateTotal();
});
document.getElementById('storage-increase').addEventListener('click', function(){
    changeValue('storage-cost', 100);
    updateTotal();
});
document.getElementById('storage-more-increase').addEventListener('click', function(){
    changeValue('storage-cost', 180);
    updateTotal();
});

// code for delivery cost

document.getElementById('delivery-default').addEventListener('click', function(){
    changeValue('delivery-cost', 0);
    updateTotal();
}); 
document.getElementById('delivery-increase').addEventListener('click', function(){
    changeValue('delivery-cost', 20);
    updateTotal();
});


function changeValue(update ,price){
    const cost = document.getElementById(update);
    const productPrice = price;
    cost.innerText = productPrice;   
};

// update total price 
function updateTotal(){
    const bestPrice =getPrice('best-cost');
    const memoryPrice =getPrice('memory-cost');
    const storagePrice =getPrice('storage-cost');
    const deliveryPrice =getPrice('delivery-cost');
   
    const total = document.getElementById('total-cost')
    total.innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;   
   
};
function getPrice(item){
    const selectText = document.getElementById(item);
    const convertNumber = parseFloat(selectText.innerText);
    return convertNumber;
};