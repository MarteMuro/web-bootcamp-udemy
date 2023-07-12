const btn = document.querySelector('#v2');

// btn.onclick = function()  {
   // console.log('you clicked me !')
   // console.log('I Hope it worked!!')
//} 

function scream() {
    console.log('AAAAAHHH!');
}
btn.onclick = scream;

document.querySelector('h1').onclick = function() {
    alert('You click H1');
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('mouseup', function() {
    alert('Alert 3rd click button');
} )
