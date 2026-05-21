import { Fragment } from "react"
import { createTextString } from "../utils"

type CheckboxGroupProps = {
  config: {
    checkboxOptions: string[]
  }
  field: string
}

export default function CheckboxGroup({ field, config }: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend>{createTextString(field)}:</legend>
      {config.checkboxOptions.map((option: string) => (
        <Fragment key={option}>
          <input id={option} name={field} value={option} type="checkbox" />
          <label htmlFor={option}>{createTextString(option)}</label>
          <br />
        </Fragment>
      ))}
    </fieldset>
  )
}
