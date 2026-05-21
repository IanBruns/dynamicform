export type CheckboxGroupElement = {
  element: "checkbox"
  field: string
  config: {
    checkboxOptions: string[]
  }
}

export type InputElement = {
  element: "input"
  field: string
  config: object
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
