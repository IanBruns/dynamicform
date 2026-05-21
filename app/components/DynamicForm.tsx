"use client"

import Input from "./Input"
import CheckboxGroup from "./CheckboxGroup"
import { DynamicFormProps, Element } from "../types"
import { createTextString } from "../utils"

export default function DynamicForm({ formData, action }: DynamicFormProps) {
  const { name, elements } = formData

  return (
    <form action={action}>
      <h1 className="text-2xl font-semibold">{createTextString(name)}</h1>
      {elements.map(({ config, field, element }: Element) => {
        const key = `${element}-${field}`
        switch (element) {
          case "input":
            return <Input key={key} field={field} config={config} />
          case "checkbox":
            return <CheckboxGroup key={key} field={field} config={config} />
          default:
            return <p>Component has not been made...YET</p>
        }
      })}
      <input
        className="border rounded border-black p-2 mt-2 hover:bg-slate-400"
        type="submit"
        value="Submit"
      />
    </form>
  )
}
