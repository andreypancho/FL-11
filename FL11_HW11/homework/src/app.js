let rootNode = document.getElementById('root');

let createTask = (e) => {
    if (e.parentNode.childNodes[1].value === '') {
        return;
    }
    let valueTask = e.parentNode.childNodes[1].value;
    let task = `<div class="task-container">`;
    task += `<span onclick="checkedTask(this)"><i class="material-icons">check_box_outline_blank</i></span>`;
    task += `<span id="text">${valueTask}</span>`;
    task += `<a id="edit" onclick="editTask(this)"><i class="material-icons">edit</i></a>`;
    task += `<a id="delete" onclick="deleteTask(this)"><i class="material-icons">delete</i></a>`;
    task += `</div>`;
    rootNode.innerHTML += task;
    e.parentNode.childNodes[1].value = '';

    let tasks = document.querySelectorAll('.task-container');
    let maxTasks = 9;
    if (tasks.length > maxTasks) {
        document.querySelector('#create-task').setAttribute('disabled', true);
        document.querySelector('.create-task').innerHTML += `<p id='error'>Maximum item per list are created</p>`;
        return;
    }
}

let checkedTask = (e) => {
    e.innerHTML = `<i class="material-icons">done</i>`
}

let deleteTask = (e) => {
    e.parentNode.remove();
    document.querySelector('#create-task').removeAttribute('disabled');
    if (document.querySelector('#error') !== null) {
        document.querySelector('#error').remove()
    }
}

let editTask = (e) => {
    let children = e.parentNode.childNodes;
    if (children[0].childNodes[0].outerText === 'done') {
        return;
    }
    let elemDOMNumberFirstStep = 4;
    let elemDOMNumberNextSteps = 7;
    let editInputDOM = 2;
    if (e.parentNode.childNodes.length === elemDOMNumberFirstStep) {
        let value = children[1].innerHTML;
        e.parentNode.innerHTML = `<input type="text" value="${value}">
                                    <i onclick="updateTask(this)" class="material-icons">
                                        save
                                    </i>`
    } else if (e.parentNode.childNodes.length === elemDOMNumberNextSteps) {
        let value = children[editInputDOM].innerHTML;
        e.parentNode.innerHTML = `<input type="text" value="${value}">
                                <i onclick="updateTask(this)" class="material-icons">
                                    save
                                </i>`
    }
}

let updateTask = (e) => {
    let item = e.parentNode.childNodes[0].value;
    let html = `<span onclick="checkedTask(this)"><i class="material-icons">
                    check_box_outline_blank
                </i></span>

                <span id="text">${item}</span>
                <a id="edit" onclick="editTask(this)">
                    <i class="material-icons">
                        edit
                    </i>
                </a>

                </a>
                <a id="delete" onclick="deleteTask(this)">
                    <i class="material-icons">
                        delete
                    </i>
                </a>`
    e.parentNode.innerHTML = html;
}