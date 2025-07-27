import { gsap } from "gsap";

const body = document.querySelectorAll('*')
 
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from(body, { y: 20, opacity: 0, duration: .75, })
 });

 console.log('hello')