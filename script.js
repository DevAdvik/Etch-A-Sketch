const BOXES = document.querySelector(".boxes");

function createBoxes() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 225; i++) {
        const div = document.createElement("div");
        div.className = "smallBox";
        div.id = `box${i}`;
        div.style.width = `calc(${BOXES.getBoundingClientRect().width}px/15)`;
        console.log(BOXES.getBoundingClientRect().width);
        fragment.appendChild(div);
    }
    BOXES.appendChild(fragment);
}

createBoxes();

BOXES.addEventListener("hover", ()=>{
    
})