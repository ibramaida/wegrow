// Get the header element
const header = document.querySelector(".header");

// Get the offset position of the header
const sticky = header.offsetTop;
// console.log(sticky);

// Add the 'sticky' class to the header when you reach its scroll position
window.addEventListener("scroll", () => {
  //   console.log(window.pageYOffset);
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
