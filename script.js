const list = document.getElementById("list");
const item = document.getElementsByClassName("item");
const input = document.getElementById("addItem");
const delBtn = document.getElementsByClassName("delete");
const editBtn = document.getElementsByClassName("edit");
const check = document.getElementById("checkSize");





//Listens for a key event (Pressing Enter)
    input.addEventListener("keydown", (event) => 
    {
        //Checks that the key was Enter as well as if there is something in the input.
        if(input.value && event.keyCode === 13) 
        {
            console.log(`You just submitted ${input.value}`);
            //Store the value
            x = `<span class="delete">DELETE</span><span class="edit">EDIT</span> <span class="todoItem">${input.value}</span>`;
            //Create an li element
            let newLi = document.createElement("li");
            //Assign content to li
            newLi.innerHTML = x;
            //Assign class to li
            newLi.classList.add("item");
            //Add listener to li
            addListener(newLi);
            //Add li to ul
            list.appendChild(newLi);
            //Resets the input back to empty.
            input.value = "";
            console.log(`x is now ${x}`);
        }
    });

check.addEventListener("click", () => {
    console.log(item.length);
})


function addListener(element) {
    const rem = element.childNodes[0];
    const edit = element.childNodes[1];
    const todoItem = element.childNodes[3];

    element.addEventListener("click", () => 
        {
            element.classList.toggle("selected");
            // console.log(element.childNodes);
        });
    rem.addEventListener("click", () => {
        rem.parentNode.remove();
    })

    edit.addEventListener("click", () => {

        if (element.childNodes.length <5) {
            editItem(todoItem);
        }
        
    })
    // edit.addEventListener("click", () => console.log(todoItem.parentNode.innerHTML))

}

function editItem(edited) {
    //Grab inner text of todo item and store it in a variable
    let prev = edited.innerText;
    //Create a text input area with the stored value
    let input = document.createElement("input");
    input.type = "text";
    input.value = prev;
    input.className = "editInput";
    edited.parentNode.appendChild(input);
    console.log(edited.parentNode.childNodes);
    input.addEventListener("keydown", (event) => {
        if(event.keyCode === 13) {
            edited.innerText = input.value;
            edited.parentNode.removeChild(input);
        }
    })
    //When enter is pressed, update the original value
}

function toggleClass() {
    this.classList.toggle("selected");
}
