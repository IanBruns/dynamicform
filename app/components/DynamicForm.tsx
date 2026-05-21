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
}

export default function DynamicForm({ formData }: DynamicFormProps) {
  const { name, elements } = formData
  return (
    <form>
      <p>{name}</p>
      {elements.map(({ type, field, element }: Element) => {
        switch (element) {
          case "input":
            return <Input key={`${type}-${field}`} type={type} field={field} />
        }
      })}
    </form>
  )
}
