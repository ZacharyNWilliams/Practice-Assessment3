let form = document.getElementById("mainForm");
let placeHolderDiv = document.getElementById("shapeSection");
form.addEventListener("submit", submitForm);
function submitForm(e){

e.preventDefault();

    let data = new FormData(form);

    let getText = data.get("text");
    let getSize = data.get("size");
    let checkBox = data.get("MakeSCircle");
    console.log(getSize);
    console.log(getText);
    console.log(checkBox);

  let createDiv = document.createElement("div");
  createDiv.classList.add("shape");
  createDiv.innerText = getText;

  createDiv.style.height = getSize + "px";
  createDiv.style.width = getSize + "px";
  createDiv.style.lineHeight = getSize + "px";



if(checkBox){
  createDiv.classList.add("circle");
}

placeHolderDiv.appendChild(createDiv);
}


  

