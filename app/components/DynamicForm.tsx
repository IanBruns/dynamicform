"use client"

import Input from "./Input"
import CheckboxGroup from "./CheckboxGroup"
import { DynamicFormProps, Element } from "../types"

export default function DynamicForm({ formData, action }: DynamicFormProps) {
  const { name, elements } = formData

  return (
    <form action={action}>
      <p>{name}</p>
      {elements.map(({ options, field, element }: Element) => {
        const key = `${element}-${field}`
        switch (element) {
          case "input":
            return <Input key={key} field={field} options={options} />
          case "checkbox":
            return <CheckboxGroup key={key} field={field} options={options} />
          default:
            return <p>Component has not been made...YET</p>
        }
      })}
      <input type="submit" value="Submit" />
    </form>
  )
}
