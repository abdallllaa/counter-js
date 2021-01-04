




const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
const outPut = document.getElementById('outPut');







// Create OUTPUT 
let num = localStorage.getItem('number') || 0;

// set result to increas or decrease or reset 
outPut.innerHTML = localStorage.getItem('number');

// Func To  PLus number 
plus.addEventListener('click',()=>{
    // plus = pp number 
    num++;
    // Set In local storage
    localStorage.setItem('number',num);
    outPut.innerHTML = num;
});


// Func To  PLus number 
minus.addEventListener('click',()=>{
    // minus number 
    num--;
    // Set In local storage
    localStorage.setItem('number',num);
    outPut.innerHTML = num;
});




// Func To  reset number 
reset.addEventListener('click',()=>{
    // reset number 
    num = 0;
    // Set In local storage
    localStorage.setItem('number',num);
    outPut.innerHTML = num;

});



















































// const plus = document.getElementById("plus");
// const reset = document.getElementById("reset");
// const minus = document.getElementById("minus");
// const outPut = document.getElementById("outPut");


// let num = localStorage.getItem('num')|| 0;


// // out put Default Result Or Current Result 
// outPut.innerHTML = num;

// // Func Plus Number 
// plus.addEventListener('click',()=>{
//     num++;
//     localStorage.setItem('num',JSON.stringify(num));
//     outPut.innerHTML= localStorage.getItem('num');
// });

// // Func minu Number 
// minus.addEventListener('click',()=>{
//     num--;
//     localStorage.setItem('num',JSON.stringify(num));
//     outPut.innerHTML= localStorage.getItem('num');
// });

// // Func reset Number 
// reset.addEventListener('click',()=>{
//     num = 0 ;
//     localStorage.setItem('num',JSON.stringify(num));
//     outPut.innerHTML= localStorage.getItem('num');
// });