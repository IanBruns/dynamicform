"use client"

import Input from "./Input"
import CheckboxGroup from "./CheckboxGroup"
import { DynamicFormProps, Element } from "../types"
import { createTextString } from "../utils"

export default function DynamicForm({ formData, action }: DynamicFormProps) {
  const { name, elements } = formData

  return (
    <form action={action}>
      <h1>{createTextString(name)}</h1>
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
