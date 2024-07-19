document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#submit").disabled =true;
    document.querySelector("#name").onkeyup = () =>{
        if(document.querySelector("#name").value.length > 0){
            document.querySelector("#submit").disabled = false;
        }
        else{
            document.querySelector("#submit").disabled = true;
        }
    };


    document.querySelector('#form').onsubmit = () => {
        const name = document.querySelector('#name').value;
           alert(`Hello ${name} Welcome`);
    };           

    document.querySelector('button').onclick = count;

    document.querySelectorAll('.color-change').forEach( (button) => {
        button.onclick = function(){
        document.querySelector('.happy').style.color = this.dataset.color;
        };

    });


});

// variables are either defined as const or let 
// var is outdated lads
// const is immutable

let counter = 0;
function count(){
    counter++;
    document.querySelector("#counter").innerHTML = counter;
    document.querySelector("#counter").style.color = "blue";

};


//Array of objects
            // Objects have properties and methods
            // they are wriiten using curly braces
let data_product = [

    {
        id: 1,
        name: 'Sweater',
        price: 20.99,
        description: "Long sleeve type",
    },

    
    {
        id: 1,
        name: 'Shirt',
        price: 20.99,
        description: "Red type",
    },


]