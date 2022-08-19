document.querySelector('.push').onclick = function(){
    if(document.querySelector('#subcontainer input').value.length == 0){
        alert(" Enter The Tasks")
    }
    else{
        document.querySelector('#list').innerHTML += `
            <div class="task">
                <span id="task_name">
                    ${document.querySelector('#subcontainer input').value}
                </span>
                <button class="delete">
                <img src="delete2.png" alt="&#9940" >
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++)
        {
            current_tasks[i].onclick = function()
            {
                this.parentNode.remove();
            }
        }

        
    }
}
