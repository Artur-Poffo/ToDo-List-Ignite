import { Check } from "@phosphor-icons/react"
import { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isDone: boolean
}

export function Checkbox({ isDone, ...props }: CheckboxProps) {
  return (
    <Container>
      <input
        type="checkbox"
        id={props.id}
        checked={isDone}
        {...props}
      />
      <label htmlFor={props.id}>
        {isDone && <Check />}
      </label>
    </Container>
  )
}