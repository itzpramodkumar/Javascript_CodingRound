// let a=document.querySelector("body")
// function abc(){
//     a.classList.toggle("b");
// }


// document.getElementById("myform").addEventListener("submit",function(e){
//     e.preventDefault();
// let name=document.getElementById("name").value
// let age=document.getElementById("age").value
// let email=document.getElementById("email").value
// let password=document.getElementById("password").value
// let p=document.getElementById("para")
    
//     if(!name==="" || !age==="" || !email==="" || !password==="" ){
//         para.innerText="Please fillUp all details"
//     }
//     else{
//         alert("form is now sucessfully submited!!!!")
//         console.log("full form data is:",{ name,age,email,password})
//     }

// })

// document.getElementById("myForm").addEventListener("submit",function(e){
//     e.preventDefault();
//     let isValid=true;
//       const name = document.getElementById("name");
//   const email = document.getElementById("email");

//   const nameError = document.getElementById("nameError");
//   const emailError = document.getElementById("emailError");
//   nameError.innerText="";
//   emailError.innerText="";
//   if(name.value===""){
//     nameError.innerText="Name is required";
//     isValid=false;
//   }
//     if(email.value===""){
//     nameError.innerText="Email is required";
//     isValid=false;
//   }
//  if(isValid){
//     console.log("Form Data ",{
//         name:name.value,
//         email:email.value,
//     })
//  }
// })


document.getElementById("form").addEventListener("submit",function(e){
e.preventDefault();
let a=document.getElementById("x")
let b=document.getElementById("y")
let c=document.getElementById("z")
let d= document.getElementById("zz")

if(a.value===""){
  c.innerText="Name is required";
   c.style.display = "block";
}

if(b.value===""){
  d.innerText="Email is required";
  d.style.display = "block";
}

})