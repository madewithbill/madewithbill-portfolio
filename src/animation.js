import { gsap } from "gsap";

const chunk = document.getElementsByClassName('animate-gsap')

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from(chunk, { y: 20, opacity: 0, duration: .75, stagger: .2, autoAlpha: 0 })
 });