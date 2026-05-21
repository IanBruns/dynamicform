import { createTextString } from "../utils"

type InputProps = {
  config: object
  field: string
}

export default function Input({ config, field }: InputProps) {
  return (
    <>
      <label htmlFor={field}>{createTextString(field)}</label>
      <br />
      <input id={field} name={field} {...config} />
      <br />
    </>
  )
}
