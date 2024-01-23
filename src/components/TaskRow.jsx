const TaskRow = ({ task, toggleTask}) => {



    return (
        // componente que representa una tarea
        // cada una de las tareas debe ser unica, por eso se añadio antes al tr un key={task.name}
        // ahora en el componente taskTable se le añade el key al taskRow
        // debemos colocar de forma obligatoria un td hijo de tr
        <tr>
            <td className="d-flex justify-content-between">
                {task.name}
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task) }/>
            </td>
        </tr>
    );
};

export default TaskRow;
