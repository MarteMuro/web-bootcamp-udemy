// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const pdtIn = form.elements.product;
    const qtyIn = form.elements.qty;
   const newLi =document.createElement('li');
   console.log(pdtIn);
   console.log(qtyIn);
   
   newLi.append(`${pdtIn.value}`);
   newLi.append(`${qtyIn.value}`);
   console.log(newLi);
   -
   list.appendChild(newLi);
   pdtIn.value ="";
   qtyIn.value ="";
})

