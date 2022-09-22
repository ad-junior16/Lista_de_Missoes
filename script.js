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

    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    li.appendChild(checkbox);

    li.classList.add("listItem");

    li.appendChild(p);

    p.classList.add("textContent")
    p.textContent = input.value

    ul.insertBefore( li , ul.firstChild);
    input.value = " "

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("buttonDel")
    deleteButton.appendChild(document.createTextNode("X"))
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

}

function alphaSort(a, b) {
    if (a.classList.contains("done")) return 1;
    if (!a.classList.contains("done")) return -1;
    return 0;
}



input.addEventListener("keypress", addMissionKeypress)

function addMissionKeypress() {
    let regex = /(?!\s)([a-zA-Z0-9]){1,}/g

    console.log()

    if (inputLength() != "" && regex.test(input.value) && event.which === 13) {
        createMission();
    }
}





