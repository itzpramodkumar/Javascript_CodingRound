// let a=document.getElementById("a").style.color=("red")

//  let a=5;
// let b=a++ + ++a + a++;
// console.log(b,a);

//
// let a={
//     "name":"Pramod Mourya",
//     "Age":21,
//     "Marks":90
// }
// console.log( `My Marks is : ${a.Marks}`);

// let x = "Hello" && 0 && "World";
// console.log(x);

// Name()
// function Name(){
//     console.log("My name is pramod kumar mourya")
// }
// let a=document.getElementById("a")
// function hide(){
//     a.style.background=("pink")
//     a.style.display=("none")
// }

// let a=[1,2,3,4,5];

// let sum=0;

// for(let i=0; i =a.length-1; ){
//     let b=sum+i

//     console.log(`The sum of array is  ${b}`);
// }

// let a=[12,13,14,15,100];
// function Max(a){
//     return Math.max(...a);
// }
// console.log(Max([12,13,14,15000,100,990]))

// let a= document.getElementById("a");
//    let i=1;
// function inc(){
//  a.innerText=(i++);

// }
// function dec(){
//  a.innerText=(i--);

// }

// let a=5

// for(let i=1; i<=10; i++){

//     let b= a*i;
//     console.log(`table is ${a} * ${i} is ${b}`)
// }

// let arr=[1,2,3,4,5];
// const [a,b,c,d,e]=arr;
// console.log(a,b,c,d,e);

// const arr=[1,2,3,4,5];
// const [first,five]=arr;
// console.log(first,five);

// const arr = [5];

// const [x, y = 10] = arr;

// console.log(x, y);

// let a=5;
// let b=10;
// [a,b]=[b,a]
// console.log(a,b);

// const user={
//     name:"pramod",
//     age:22
// }
// const {name,age}=user;
// console.log(name,age);

// const user={
//     name:"Pramod",
//     age:22
// };
// const {name:userName,age:Userage}=user;
// console.log(userName,Userage);

// const user = {
//   name: "Pramod"
// };

// const { name, city = "Delhi" } = user;

// console.log(name, city);

// const arr1=[1,2,3,4,5];
// const copyArr=[...arr1];
// console.log(copyArr);

// const arr1=[1,2,3,4];
// const arr2=[4,5,6];
// const mergeArr=[...arr1,...arr2];
// console.log(mergeArr);

// const arr1=[1,2,3,4,5]
// const arr2=[7,8,9]
// const result=[0,...arr1,30,...arr2,23,45,43];
// console.log(result);

// const number=[1,2,3];
// const up=[...number,4];
// console.log(number);
// console.log(up)

// class Car {
//     constructor(brand,model){
//         this.brand=brand;
//         this.model=model;
//     }
//     start(){
//         console.log(`${this.brand} ${this.model} is starting....`);

//     }
// }
// const myCar=new Car ("Tesla", " Model S");
// myCar.start();
// class Student {
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;

//     }
//     grade(){
//         if(this.marks>=90) return "A+";
//         if(this.marks>=80) return "A";
//         if(this.marks>=70) return "B+";
//         if(this.marks>=60) return "B";
//         if(this.marks>=50) return "C";

//         return fail;

//     }
//     getDetails(){
//         console.log(`Name :${this.name} marks : ${this.marks}`)
//     }

// }
// const s1=new Student("Pramod",85);
// const s2=new Student ("Amit",42);

// s1.getDetails();
// s2.getDetails()
// let input=document.getElementById("In");
// let ul=document.getElementById("list");
// let li=document.createElement("li");

// function addItem(){

// li.innerText=input.value;
// ul.appendChild(li);

// }

// let a=document.getElementById("list")
// function deleteItem(){
//     if(a.lastElementChild){
//         a.removeChild(a.lastElementChild);
//     }
//     else{
//         alert("list is empty")
//     }
// }

// document.getElementById("GrandFather").addEventListener("click",function(){
//     console.log("grandfather clicked");
// },
// true
// );
// document.getElementById("parent").addEventListener("click",function(){
//     console.log("Parent clicked")
// },
// true

// );
// document.getElementById("child").addEventListener("click",function(){
//     console.log("Child clicked");
// },
// true

// );

// function validationForm(){
//     let name=document.getElementById("name").value.trim()
//     let email=document.getElementById("email").value.trim()
//     let error=document.getElementById("error");

//     if(name ==="" || email ===""){
//         error.innerText="All fields are required"
//     }
//     error.innerText="";
//     alert("Form submitted successfully");
//     return true;

// }

// function A(){
//     validationForm()

// }
// A();

// function showText(){
//     let inputValue=document.getElementById("textInput").value;
//     document.getElementById("output").innerText=inputValue;
// }

// let a=document.getElementById("btn")

// a.addEventListener("click",function(){
//     document.body.classList.toggle("dark");
//     if( document.body.classList.toggle("dark")){
//         a.innerText="☀️ Light Mode"
//     }
//     else{
//         a.innerText="🌙 Dark Mode";

//     }
// })

// function showText(){
// let a=  document.getElementById("a").value
// document.getElementById("b").innerText=a

// }

// let x=document.getElementById("a")
// let y=document.getElementById("b")
// function res(){
//    y.innerText= x.value
// }

// import k from "./img/img2.avif"
// import p from "./img/img3.webp"
// import q from "./img/img4.avif"
// import h from "./img/img5.jfif"

// let s=[k,p,q,h]
// let a=document.getElementById("a")
// let t=0;
// function img(){
// a.style.backgroundImage=`url(${s[t]})`;
// a.style.backgroundSize="cover";
// a.style.backgroundPosition="center"
// t++;
// if(t>=s.length){
//    t=0;
// }
// }
//    img()
//    setInterval(img,2000);

// import k from "./img/img2.avif";
// import p from "./img/img3.webp";
// import q from "./img/img4.avif";
// import h from "./img/img5.jfif";

// let s = [k, p, q, h];
// let a = document.getElementById("a");
// let t = 0;

// function img() {
//   a.style.backgroundImage = `url(${s[t]})`;
//   a.style.backgroundSize = "cover";
//   a.style.backgroundPosition = "center";

//   t++;
//   if (t >= s.length) {
//     t = 0;
//   }
// }

// img();
// setInterval(img, 2000);

// import k from "./img/img2.avif";
// import p from "./img/img3.webp";
// import q from "./img/img4.avif";
// import h from "./img/img5.jfif";

// document.addEventListener("DOMContentLoaded", () => {

//   let s = [k, p, q, h];
//   let a = document.getElementById("a");
//   let btn = document.getElementById("next");
//   let t = 0;

//   function img() {
//     a.style.backgroundImage = `url(${s[t]})`;
//     a.style.backgroundSize = "cover";
//     a.style.backgroundPosition = "center";

//     t++;
//     if (t >= s.length) {
//       t = 0;
//     }
//   }
//   img(); // first image load
//   btn.addEventListener("click", img);
// });

//  document.getElementById("form").addEventListener("submit",function(e){
// e.preventDefault();
// let  name=document.getElementById("name").value.trim()
// let email=document.getElementById("email").value.trim()
// let error=document.getElementById("error");
// if(name===""){
//    error.innerText="Name is reqired";
//    return;
// }
// if(email===""){
//    error.innerText="Email is required";
//    return;
// }
// error.innerText="";
// alert("Form Submitted Successfully");

// }
//  )

// document.getElementById("form").addEventListener("submit",function(e){
//    e.preventDefault();
//    let name=document.getElementById("name").value.trim();
//    let email=document.getElementById("email").value.trim();
//    let pdf=document.getElementById("pdf").files[0];
//    let error=document.getElementById("error");
//    if(name===""){
//       error.innerText="Name is required";
//       return;
//    }
//      if(email===""){
//       error.innerText="Email is required";
//       return;
//    }
//      if(!pdf){
//       error.innerText="pdf file is required";
//       return;
//    }
//    if(pdf.type !=="applicatio/pdf"){
//       error.innerText="only pdf file are allow"

//       return;
//    }
//    error.innerText=""
//    alert("Form is sucessfull!");
// })

// function submit(){
// let a=document.getElementById("a")
// let b=document.getElementById("b")
// a.style.transition = "height 0.5s ease";
// a.style.height = "600px";
// a.style.transition="width 0.5s ease";
// a.style.width="400px";
// b.style.transition="fontSize 0.5s ease";
// b.style.fontSize = "50px"
// }

// document.getElementById("form").addEventListener("submit",function(e){
//  e.preventDefault();
//    let name=document.getElementById("name").value.trim();
//    let sn=document.getElementById("sn").value.trim();
//    let email=document.getElementById("email").value.trim();
//    let pass=document.getElementById("pass").value.trim();
//    let er=document.getElementById("er")
//    if(name===""){
//       er.innerText="Name is required";
//       return;

//    }
//   if(sn===""){
//       er.innerText="LastName is required";
//    return;

// }
//      if(email===""){
//          er.innerText="Email is required";
//       return;
//    }
//      if(pass===""){
//          er.innerText="Password is required";
//       return;
//    }
//    er.innerText=""
//    alert("My Form is now sussecfully submited")

// })

// let a = 2;

// for (let i = 1; i <= 10; i++) {
//    let z = a * i;
//    console.log(`${a} * ${i} = ${z}`);
// }

//    let z= document.getElementById("a");

// function add (){
//  let a= document.getElementById("B").value
//  z.innerText=a
// }
// function dl (){
//    z.innerText="";
// }
// document.querySelector("h1").innerText="my name is kuch bhi"

// let a=document.getElementsByTagName("h1")[0]
// a.innerText="dfghjkl;lkjhnbvbnm,.,"

// let a= document.querySelectorAll("h1")
// a.forEach(a=>{
//    a.style.color="red"
// })

// let card = document.getElementById("a");
// a.claslList.add("highlight");


//  const a=document.getElementById("img")
//  const b=document.getElementById("btn")

// b.addEventListener("click",()=>{
// a.src="./img/new.jpg";
// })
 
// let a=document.getElementById("a")

// function add(){
//     let b=document.getElementById("input").value
//     let c= document.createElement("li");
//     c.innerText=b;
//     a.appendChild(c);
// }


// let list=document.getElementById("list").addEventListener("click",function(e){
//     if(e.target.tagName=="LI"){
//         e.target.remove();
//     }
// })

// let list =document.getElementById("list");
// const count=list.children.length;
// console.log(count);



function abc(){
let box= document.getElementById("box")
box.classList.toggle("hidden");
}