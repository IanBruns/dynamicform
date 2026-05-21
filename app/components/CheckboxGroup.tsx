import { Fragment } from "react"
import { createTextString } from "../utils"

type CheckboxGroupProps = {
  options: {
    checkboxOptions: string[]
  }
  field: string
}

export default function CheckboxGroup({ field, options }: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend>{createTextString(field)}</legend>
      {options.checkboxOptions.map((option: string) => (
        <Fragment key={option}>
          <input id={option} name={field} value={option} type="checkbox" />
          <label htmlFor={option}>{createTextString(option)}</label>
          <br />
        </Fragment>
      ))}
    </fieldset>
  )
}
