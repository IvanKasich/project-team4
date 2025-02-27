document.querySelectorAll("h1 span").forEach((el, i) => {
  el.style.setProperty("--i", i);
});