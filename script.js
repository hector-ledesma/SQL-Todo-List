let x;
const list = document.getElementById("list");
const item = document.getElementsByClassName("item");
const input = document.getElementById("addItem");
const delBtn = document.getElementsByClassName("delete");



//Listens for a key event (Pressing Enter)
    input.addEventListener("keydown", (event) => 
    {
        //Checks that the key was Enter as well as if there is something in the input.
        if(input.value && event.keyCode === 13) 
        {
            console.log(`You just submitted ${input.value}`);
            //Store the value
            x = input.value;
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


   
//Loops through existing items
for (let i=0;i < item.length ;i++) 
   {
       //Adds event listener to delete items
       delBtn[i].addEventListener("click", function () 
       {
           console.log(item[i]);
           item[i].parentNode.removeChild(item[i]);
       })

       
       item[i].addEventListener("click", () => 
       {
           item[i].classList.toggle("selected");
       });
       
   }

function addListener(element) {
    element.addEventListener("click", () => 
        {
            element.classList.toggle("selected");
        });
}