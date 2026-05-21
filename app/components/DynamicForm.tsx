"use client"

import Input from "./Input"

type Element = {
  options: Record<string, unknown>
  field: string
  element: string
}

type DynamicFormProps = {
  formData: {
    id: number
    name: string
    elements: Element[]
  }
  action: (formData: FormData) => void
}

export default function DynamicForm({ formData, action }: DynamicFormProps) {
  const { name, elements } = formData

  return (
    <form action={action}>
      <p>{name}</p>
      {elements.map(({ options, field, element }: Element) => {
        switch (element) {
          case "input":
            return (
              <Input
                key={`${options.type}-${field}`}
                field={field}
                options={options}
              />
            )
        }
      })}
      <input type="submit" value="Submit" />
    </form>
  )
}
