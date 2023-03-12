import ClipboardIcon from "../../assets/clipboard-icon.svg"
import { Container } from "./styles"

export function EmptyTasks() {
  return (
    <Container>
      <img src={ClipboardIcon} alt="ícone ilustrativo" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}