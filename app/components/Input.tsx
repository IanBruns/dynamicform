import { createTextString } from "../utils"

type InputProps = {
  options: object
  field: string
}

export default function Input({ options, field }: InputProps) {
  return (
    <>
      <label htmlFor={field}>{createTextString(field)}</label>
      <br />
      <input id={field} name={field} {...options} />
      <br />
    </>
  )
}
