document.getElementById('memory-increase').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    const memoryPrice = 180;
    memoryCost.innerText = memoryPrice;
})
document.getElementById('default-cost').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    const memoryPrice = 0;
    memoryCost.innerText = memoryPrice;
})