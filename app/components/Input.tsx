type InputProps = {
  type: string
  field: string
}

export default function Input({ type, field }: InputProps) {
  return (
    <>
      <label htmlFor={field}>{field}</label>
      <br />
      <input id={field} type={type} />
      <br />
    </>
  )
}
