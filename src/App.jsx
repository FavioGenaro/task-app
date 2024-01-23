import { useEffect, useState } from "react";
// import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import Container from "./components/Container";

function App() {

  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)
  // const [isChecked, setIsChecked] = useState(false)

  // Para guardar una tarea dentro del arreglo 
  // debemos pasar una función a TaskCreator para que pueda añadir valores al arreglo

  function createNewTask (taskName) {
    // creamos una validación para que no se repita el nombre de la tarea
    // si no se encuenta la tarea en el arreglo (retorna undefined)
    if(!tasksItems.find(task => task.name === taskName)){
      // lo que hacemos en react no es un push, para agregar el elemento
      // sino que creamos una copia del arreglo y le añadimos el nuevo valor
      setTasksItems([...tasksItems, {name: taskName, done:false}])
    }
    // alert('Creating')
  }

  // cambiamos el done de cada tarea, este debe llegar hasta TaskRow
  const toggleTask = (task) => {
    // usamos map porque este retorna un nuevo arreglo
    setTasksItems(
      tasksItems.map( t => (t.name == task.name) ? {...t, done: !t.done} : t)
    )
  }

  const cleanTasks = () => {
    // quitamos las tareas que estan hechas es decir task.done = true
    // solo nos queremos con los false = !task.done
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false) // para que no muetre las tareas hechas
  }

  // si no le colocamos variable en el arreglo, se ejecuta ni bien carga la aplicación
  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  },[])

  // recibe y ejecuta la función cuando una variable cambia de valor
  useEffect(()=>{
    // dado que localStorage no guarda bien los arreglo y objetos
    // vamos a convertirlos a texto y al momento de leerlos valos a transformarlos
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  },[tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
      <TaskCreator createNewTask={createNewTask}/>
        {/* crearemos una tabla con las tareas por hacer y las tareas hechas */}
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={false} />

        {/* Para no estar pasando esto: setShowCompleted={setShowCompleted} showCompleted={showCompleted} 
          pasamos setShowCompleted que ejecuta una función que actualiza el estado
        */}
        <VisibilityControl 
          setShowCompleted={(checked) => setShowCompleted(checked)} 
          cleanTasks={cleanTasks}
          isChecked={showCompleted} // para que se actualice el valor del checkbox según el showCompleted
        />

        {
          // podriamos reemplazar showCompleted={true} por showCompleted={showCompleted}
          showCompleted && (<TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={true}/>)
        }
      </Container>
    </main>
  );
}

export default App;
