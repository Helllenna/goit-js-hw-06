const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);
console.log("");
itemEl.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
  console.log("");
});
