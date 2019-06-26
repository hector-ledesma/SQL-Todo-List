let x;
const list = document.getElementById("list");
const item = document.getElementsByClassName("item");
const input = document.getElementById("addItem");
const delBtn = document.getElementsByClassName("delete");
const check = document.getElementById("checkSize");



//Listens for a key event (Pressing Enter)
    input.addEventListener("keydown", (event) => 
    {
        //Checks that the key was Enter as well as if there is something in the input.
        if(input.value && event.keyCode === 13) 
        {
            console.log(`You just submitted ${input.value}`);
            //Store the value
            x = `<span class="delete">DELETE</span><span class="edit">EDIT</span> ${input.value}`;
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
    element.addEventListener("click", () => 
        {
            element.classList.toggle("selected");
        });
    rem.addEventListener("click", () => {
        console.log(this);
        rem.parentNode.remove();
    })
}

function toggleClass() {
    this.classList.toggle("selected");
}