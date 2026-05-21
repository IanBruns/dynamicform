import { Fragment } from "react"

type CheckboxGroupProps = {
  options: {
    checkboxOptions: string[]
  }
  field: string
}

export default function CheckboxGroup({ field, options }: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend>{field}</legend>
      {options.checkboxOptions.map((option: string) => (
        <Fragment key={option}>
          <input id={option} name={field} value={option} type="checkbox" />
          <label htmlFor={option}>{option}</label>
          <br />
        </Fragment>
      ))}
    </fieldset>
  )
}
