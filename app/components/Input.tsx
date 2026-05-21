import { createTextString } from "../utils"

type InputProps = {
  config: object
  field: string
}

export default function Input({ config, field }: InputProps) {
  return (
    <>
      <label htmlFor={field}>{createTextString(field)}:</label>
      <br />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        id={field}
        name={field}
        {...config}
      />
      <br />
    </>
  )
}
