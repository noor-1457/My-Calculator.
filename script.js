let string = "";
let memory = 0;

let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");

Array.from(buttons).forEach((button) =>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == "="){
      string = eval(string);  //eval()is used to compute the values
      input.value = string;
    }else if(e.target.innerHTML == "C"){
      console.log("C is clicked!");
      input.value = "";
      string = "";//c is used to clear the input bar
      memory = 0;
    }else if (e.target.innerHTML === "M-") {
      memory -= Number(input.value);
      input.value = memory;
    }else if (e.target.innerHTML === "M+") {
      memory += Number(input.value);
      input.value = memory;
    }else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  })
});
