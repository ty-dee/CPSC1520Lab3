const Resources = document.querySelector("#resources");
const ShowResources = document.querySelector("#show-resources");

ShowResources.addEventListener("click", onButtonClick);

function onButtonClick(e){
    console.log(Resources);
    Resources.classList.remove("d-none");
}

Resources.addEventListener("mouseover", boldedLinks)

function boldedLinks(e){
    console.log(e.target)
    const boldHover = e.target;
    boldHover.classList.add("fw-bold");
}

Resources.addEventListener("mouseout", unboldedLinks)

function unboldedLinks(e){
    console.log(e.target)
    const unboldOut = e.target;
    unboldOut.classList.remove("fw-bold");
}

Resources.addEventListener("click", addItalics)

function addItalics(e){
    const italic = e.target;
    italic.classList.add("fst-italic");
}

Resources.addEventListener("mouseout", removeItalics)

function removeItalics(e){
    const italicsGone = e.target;
    italicsGone.classList.remove("fst-italic");
}