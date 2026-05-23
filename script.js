const listContainer = document.getElementById("list-container");
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");  
            saveData();    //toggle adds and removes "checked" class
        }
    });
    const inputBox = document.getElementById("text-box");
    const addBtn = document.querySelector("button");

    addBtn.addEventListener("click",function(){
        if(inputBox.value.trim() === ""){
            alert("Write something first");
            return;
        }

        
        let li = document.createElement("li");
        li.innerText = inputBox.value;

        listContainer.appendChild(li);

        inputBox.value = "";
        saveData();

    });
    inputBox.addEventListener("keydown",function(e){
            if(e.key === "Enter"){
                addBtn.click();
            }
    });

    const clearBtn =document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function(){
        if(confirm("Clear all tasks?")){
        listContainer.innerHTML="";
        }

    saveData();
    });

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
