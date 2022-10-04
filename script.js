let input = document.getElementById("textInput")
let ul = document.getElementById("ul")
let item = document.getElementsByTagName("li")

function inputLength() {
    return input.value
}

function createMission() {
    let li = document.createElement("li")
    let checkbox = document.createElement("input")
    let p = document.createElement("p")
    let hiddenInput = document.createElement("input")
    hiddenInput.classList.add("hidden")
    hiddenInput.classList.add("hiddeninput")

    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    li.appendChild(checkbox);

    li.classList.add("listItem");

    li.appendChild(p);
    li.appendChild(hiddenInput);

    
    hiddenInput.value = input.value

    p.classList.add("textContent")
    p.textContent = input.value

    ul.insertBefore( li , ul.firstChild);
    input.value = " "

    let imgEdit = document.createElement("img")
    imgEdit.src = "./assets/pencil.svg"
    let editButton = document.createElement("button")
    editButton.classList.add("buttonEdit")
    editButton.appendChild(imgEdit)
    li.appendChild(editButton)
    editButton.addEventListener("click", editMission)


    let imgClose = document.createElement("img")
    imgClose.src = "./assets/x-lg.svg"
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("buttonDel")
    deleteButton.appendChild(imgClose)
    li.appendChild(deleteButton)
    deleteButton.addEventListener("click", deleteMission)

    

    function deleteMission() {

        li.remove()
    }

    checkbox.addEventListener("change", missionDone)

    function missionDone(ev) {
        if (this.checked) {
            li.classList.add("done")
        } else {
            li.classList.remove("done")
        }
        
        let filter = Array.from(ul.querySelectorAll('li')).sort(alphaSort)

        ul.innerHTML = ""

        filter.forEach(function(li){
            ul.appendChild(li)
        })
                
    }

    function editMission(){
        if(checkbox.checked != true){
        hiddenInput.classList.remove("hidden")
        p.classList.add("hidden")


        hiddenInput.addEventListener("keypress", function(event){
            editMissionKeypress(event , hiddenInput , p)
        })
    }
    }

}

function alphaSort(a, b) {
    if (a.classList.contains("done")) return 1;
    if (!a.classList.contains("done")) return -1;
    return 0;
}



input.addEventListener("keypress", addMissionKeypress)

function addMissionKeypress() {
    let regex = /(?!\s)([a-zA-Z0-9]){1,}/g
    

    if (inputLength() != "" && regex.test(input.value) && event.which === 13) {
        createMission();
    }
}

function editMissionKeypress(event , hiddenInput , p) {
    let regex = /(?!\s)([a-zA-Z0-9]){1,}/g
    
        
    if (regex.test(hiddenInput.value) && event.which === 13) {
        hiddenInput.classList.add("hidden")
        p.textContent = hiddenInput.value
        p.classList.remove("hidden")
    }
} 




