import { gsap } from "gsap";

const chunk = document.getElementsByClassName('animate-gsap')

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from(chunk, { y: 20, opacity: 0, filter: "blur(5px)", duration: .5, stagger: .2, ease: "power1.out", autoAlpha: 0 })
 });