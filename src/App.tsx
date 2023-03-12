import { PlusCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Container, Content, InputArea } from "./Home.styles";
import { ITask } from "./interfaces/ITask";

export function App() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    const parsedTask = JSON.parse(savedTasks!);

    return parsedTask || []
  })
  const [newTaskText, setNewTaskText] = useState("")

  function handleCreateTask(task: string) {
    const newTask = {
      id: uuidv4(),
      content: task,
      isDone: false
    }

    setTasks([...tasks, newTask])
    setNewTaskText("")
  }

  function handleSetDoneTask(id: string) {
    const taskIndex = tasks.findIndex(task => task.id === id)
    const tempTasks = [...tasks]

    tempTasks[taskIndex].isDone = !tempTasks[taskIndex].isDone

    setTasks(tempTasks)
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <Container>
      <Header />

      <Content>
        <InputArea>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
            required
          />

          <button
            disabled={newTaskText.length === 0}
            onClick={() => handleCreateTask(newTaskText)}
          >
            Criar
            <PlusCircle size={20} />
          </button>
        </InputArea>

        {tasks.length === 0 ? <EmptyTasks /> : <TaskList tasks={tasks} onDoneTask={handleSetDoneTask} onDeleteTask={handleDeleteTask} />}
      </Content>
    </Container>
  )
}