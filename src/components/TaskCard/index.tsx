import { Trash } from "@phosphor-icons/react"
import { ITask } from "../../interfaces/ITask"
import { Checkbox } from "../Checkbox"
import { Container } from "./styles"

interface TaskProps {
  task: ITask
  onDoneTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TaskCard({ task, onDoneTask, onDeleteTask }: TaskProps) {
  return (
    <Container isDone={task.isDone} >
      <Checkbox isDone={task.isDone} id={task.id} onClick={() => onDoneTask(task.id)} />
      <p>{task.content}</p>
      <Trash size={24} onClick={() => onDeleteTask(task.id)} />
    </Container>
  )
};