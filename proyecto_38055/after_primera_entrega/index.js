let option;
let tasks = [
    {
        id: 1,
        day: 1,
        task: "Ir a comer",
        state: "Pendiente"
    },
    {
        id: 2,
        day: 2,
        task: "Salir a pasear",
        state: "Pendiente"
    },
    {
        id: 3,
        day: 6,
        task: "Jugar a Apex",
        state: "Pendiente"
    },
];

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];

const states = [
    'En proceso',
    'Pendiente',
    'Finalizado'
];

while(option !== 0) {
    option = Number(prompt('Ingrese una opción:\n1. Agregar Tarea\n2. Ver Tareas\n3. Borrar Tarea\n0. Salir'));
    
    switch (option) {
        case 1:
                const day = Number(prompt('Ingrese el día de la semana, de la tarea que desea crear:\n 1. Lunes\n 2. Martes\n 3. Miércoles\n 4. Jueves \n 5. Viernes  \n 6. Sábado \n 7. Domingo'));
                const task = prompt('Ingrese la tarea:');
                const state = Number(prompt('Ingrese el estado inicial de la tarea:\n 1. En proceso\n 2. Pendiente\n 3. Finalizada'));
                const creationID = getLastID() + 1; 
                createTask(creationID, day, task, state);
            break;
        case 2:
               getAllTasks();
            break;
        case 3:
            let deleteID = Number(prompt('Ingrese el ID de la tarea a eliminar: '));
               deleteTask(deleteID);
            break;
        case 0: 
                alert('Gracias, vuelva prontos');
            break;
        default:
                alert('La opción ingresa no es correcta, intente nuevamente');
            break;
    }
}


function createTask(id, day, task, state) {
    tasks.push({
        id,
        day,
        task,
        state: states[state - 1]
    });
}

function getAllTasks() {
    console.log('\n------------------------------\n');
    tasks.forEach((task) => console.log(task.id + " - " + days[task.day - 1] + " - " + task.task + " - " + task.state));
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id); 
}

function getLastID() {
    const ids = tasks.map(task => task.id);
    return Math.max(...ids);
}