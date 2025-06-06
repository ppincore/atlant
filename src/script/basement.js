
import "../styles/basementPage/basement.scss"
import { setHeaderOpacityOnScroll } from "./setHeaderOpacityOnScroll";
const headerElem = document.querySelector(".header");

window.addEventListener("scroll", () => {
  setHeaderOpacityOnScroll(headerElem, "#273B46");
});