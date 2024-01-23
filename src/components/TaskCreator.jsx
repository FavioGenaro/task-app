import { useState } from "react";

// props es un objeto que almacena todos los parámetros que le pasamos a taskCreator
const TaskCreator = ({createNewTask}) => {


    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() // para que cancele el comportamiento por defecto del form
        // alert('sended')
        createNewTask(newTaskName) // le pasamos el nuevo valor, que se añadirá al arreglo
        // localStorage.setItem('tasks', newTaskName)
        setNewTaskName('') // limpiamos el valor
    }

    {/* Para poder hacer enter y se active el evento click de button 
        onSubmit es un evento del form para enviar los datos a un server.
        lo que haremos será solo capturar los datos. 
        Para ello debemos quitar el evento click del button y ahora el click del boton será el onSubmit.
        Si dejamos el evento click, se ejecuta primero el click y luego el onSubmit.
        Podemos hacer click en el boton o presionar Enter
    */}
    return (
    <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
            <input
                className="form-control"
                type="text"
                placeholder="Enter a new task"
                value={newTaskName}
                onChange={(e) => {
                setNewTaskName(e.target.value);
                // console.log(e.target.value);
                }}
            />
        </div>
        
        <div className="col-3">
            {/* onClick={() => alert(newTaskName)} */}
            <button className="btn btn-primary btn-sm" >Save Task</button>
        </div>
    </form>
    )
}


export default TaskCreator;