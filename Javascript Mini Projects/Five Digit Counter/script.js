var interval;

//edge conditions
function button(){

var input = parseInt(document.querySelector('input').value); //input value

if(input < 0 || input > 99999){
    alert('Please Enter input betweem 1 to 99999 only');
    clearInterval(interval); // if counter is running , stop counter first and then give alert(optional)
    return; // return can be used in function , not in addeventlistner
}

 if(isNaN(input)){
   alert('Enter the interger vaue only!!');
   clearInterval(interval);
   return;
}

clearInterval(interval);//clearing the previous interval

var curr = document.querySelectorAll('.lower-div .count .counter1');
var next = document.querySelectorAll('.lower-div .count .counter2');

resetNumbers(curr , next , 5);

function resetNumbers(curr , next , end){
    for(let i = 0 ; i < end ; i++){
        curr[i].innerHTML = 0;
        next[i].innerHTML = 1;
    }
   
}   

var inputId = document.querySelector('input'); // input value

let count = 0; 

      interval = setInterval(function fun(){
             
         if(count === input){
             clearInterval(interval);
             alert("Time up!!");
             return;
         }

         increase(curr , next , 4);
        //  console.log(count);
         count++;
     } , 2000);


    }


function increase(curr , next , index){

    let c = curr[index];
    let n = next[index];

    if(c.innerHTML == 9){
        increase(curr , next , index - 1);
    }
    n.classList.add('animate');
     
     setTimeout(function () {
        c.innerHTML = n.innerHTML;
        // console.log(c.innerHTML + "c");
        n.classList.remove("animate");
        n.innerHTML = parseInt(n.innerHTML) + 1;

        if(n.innerHTML > 9){
            n.innerHTML = 0;
        }
        console.log(c.innerHTML + " c.innerHTML");
    }, 1000);
    
}
