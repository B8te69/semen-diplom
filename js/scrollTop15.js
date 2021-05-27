let t;
function up() {
  let top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -500);
    t = setTimeout("up()", 40);
  } else clearTimeout(t);

  return false;
}

window.addEventListener("scroll", () => {
  let btn = document.querySelector(".btn-top");
  let topOff = 800;
  let OffTop = window.pageYOffset
    ? window.pageYOffset
    : document.body.scrollTop;

  if (OffTop >= 750 && OffTop <= 3000) {
    btn.classList.remove("hide");
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
    btn.classList.add("hide");
  }
});
