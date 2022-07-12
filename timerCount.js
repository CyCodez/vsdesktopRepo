//To get the count value from the document
let value = document.querySelector(".count")

//To target all buttons have the btn class
let btn = document.querySelectorAll(".btn");

//initializing count to zero to use subsequently
let count = 0;

//using the forEach to grab all my button and add eventListeners to each of them
btn.forEach(btns=>{btns.addEventListener("click", (e)=>{
    //targeting the classList of all my buttons
   const style = e.currentTarget.classList;
    
   //using tenary operator to manipulate my count based on the buttons clicked
    style.contains("increase") ? count++ : style.contains("reset") ? count=0 : count--

    //using tenary operator to change the color of my count based the value 
    count > 0 ? value.style.color = "green" :count < 0 ? value.style.color = "red":
    value.style.color = "black";
    //printing my value to the screen;
    value.textContent = count;
});
});
