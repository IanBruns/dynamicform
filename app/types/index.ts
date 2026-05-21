export type CheckboxGroupElement = {
  element: "checkbox"
  field: string
  options: {
    checkboxOptions: string[]
  }
}

export type InputElement = {
  element: "input"
  field: string
  options: object
}

export type Element = CheckboxGroupElement | InputElement

export type DynamicFormData = {
  id: number
  name: string
  elements: Element[]
}

export type DynamicFormProps = {
  formData: DynamicFormData
  action: (formData: FormData) => void
}
