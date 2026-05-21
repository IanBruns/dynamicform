import { render, screen } from "@testing-library/react"
import DynamicForm from "./DynamicForm"

describe("DynamicForm", () => {
  it("renders", () => {
    render(<DynamicForm />)
    expect(screen.getByText("Dynamic Form!")).toBeInTheDocument()
  })
})
