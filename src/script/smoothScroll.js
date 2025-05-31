export function smoothScroll(deltaY, sections, state) {
  if (deltaY > 0) {
    state.currentSectionIndex = Math.min(
      state.currentSectionIndex + 1,
      sections.length - 1
    );
  } else {
    state.currentSectionIndex = Math.max(state.currentSectionIndex - 1, 0);
  }

  const section = sections[state.currentSectionIndex];
  const sectionMiddle =
    section.offsetTop + section.offsetHeight / 2 - window.innerHeight / 2;

  window.scrollTo({
    top: sectionMiddle,
    behavior: "smooth",
  });
}
