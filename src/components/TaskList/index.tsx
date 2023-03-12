import { ITask } from "../../interfaces/ITask"
import { TaskCard } from "../TaskCard"
import { Header, List } from "./styles"

interface TaskListProps {
  tasks: ITask[]
  onDoneTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TaskList({ tasks, onDoneTask, onDeleteTask }: TaskListProps) {
  const allTasksNumber = tasks.length
  const completedTasksNumber = showTasksCompleted()

  function showTasksCompleted() {
    const completedTasks = tasks.reduce((tasksCompleted, task) => {
      if (task.isDone === true) {
        tasksCompleted++
      }

      return tasksCompleted
    }, 0)

    return `${completedTasks} de ${tasks.length}`
  }

  return (
    <>
      <Header>
        <strong>Tarefas criadas  <span>{allTasksNumber}</span></strong>
        <strong>Concluídas <span>{completedTasksNumber}</span></strong>
      </Header>

      <List>
        {tasks.map(task => {
          return (
            <TaskCard key={task.id} task={task} onDoneTask={onDoneTask} onDeleteTask={onDeleteTask} />
          )
        })}
      </List>
    </>
  )
}