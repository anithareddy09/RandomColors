const button = document.querySelector("#btn");
const h1 = document.querySelector("h1");
button.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newcolor = `rgb(${r},${g},${b})`
    h1.innerText = newcolor;
    document.body.style.backgroundColor = newcolor;
});
