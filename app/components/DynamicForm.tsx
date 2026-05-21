"use client"

import { ChangeEvent } from "react"
import Input from "./Input"

type Element = {
  type: string
  field: string
  element: string
}

type DynamicFormProps = {
  formData: {
    id: number
    name: string
    elements: Element[]
  }
  onSubmit: (formData: Record<string, unknown>) => void
}

export default function DynamicForm({ formData, onSubmit }: DynamicFormProps) {
  const { name, elements } = formData

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const submitData = Object.fromEntries(formData.entries())
    onSubmit(submitData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{name}</p>
      {elements.map(({ type, field, element }: Element) => {
        switch (element) {
          case "input":
            return <Input key={`${type}-${field}`} type={type} field={field} />
        }
      })}
      <input type="submit" value="Submit" />
    </form>
  )
}
