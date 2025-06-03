export function setHeaderOpacityOnScroll(header,color) {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  header.style.backgroundColor = scrolled ? color : "transparent";
}