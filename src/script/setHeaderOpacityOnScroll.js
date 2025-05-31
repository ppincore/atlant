export function setHeaderOpacityOnScroll(header) {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  header.style.backgroundColor = scrolled ? "#524F4C" : "transparent";
}