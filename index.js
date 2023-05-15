let string = "";
let buttons = document.querySelectorAll(".button");

// console.log(buttons)

// console.log(Array.from(buttons))

const button = [...buttons];

button.forEach((button) => {
  button.addEventListener("click", (e) => {
   
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".input").value = string;
    }
    // console.log(e.target)
    else {
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});

// Array.form(buttons).forEach((buttons)=>{
//     buttons.addEventListener("click", (e)=>{

//         console.log(e.target.value)
//         string += e.target.innerHTML

//     })
// })
