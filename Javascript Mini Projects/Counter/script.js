var interval;

//edge conditions
function button(){
console.log("aagya");
var input = parseInt(document.querySelector('input').value); //input value

if(input < 0 || input > 10){
    alert('Please Enter input betweem 0 to 9 only');
    clearInterval(interval); // if counter is running , stop counter first and then give alert(optional)
    console.log("aagya");
    return; // return can be used in function , not in addeventlistner
}

 if(isNaN(input)){
   alert('Enter the interger vaue only!!');
   clearInterval(interval);
   console.log("aagya");
   return;
}

clearInterval(interval);//clearing the previous interval
var btnId = document.querySelector('button'); // button id


var curr = document.querySelector('.counter1');
var next = document.querySelector('.counter2');
resetNumbers(curr , next);

   
var inputId = document.querySelector('input'); // input value

let count = 0; 

      interval = setInterval(function fun(){
             
         if(count === input){
             clearInterval(interval);
             alert("Time up!!");
             return;
         }

         increase(curr , next);
         console.log(count);
         count++;
     } , 2000);


    }

function resetNumbers(curr , next){
    curr.innerHTML = 0;
    next.innerHTML = 1;
}

function increase(curr , next){
     next.classList.add('animate');
     
     setTimeout(function () {
        curr.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
        console.log(curr.innerHTML + " curr.innerHTML");
    }, 1000);
    
}
