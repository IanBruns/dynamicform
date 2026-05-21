import { render, screen } from "@testing-library/react"
import DynamicForm from "./DynamicForm"

const mockLoginFormData = {
  id: 1,
  name: "login",
  elements: [
    { type: "password", field: "password", element: "input" },
    { type: "text", field: "username", element: "input" },
  ],
}

describe("DynamicForm", () => {
  it("renders", () => {
    render(<DynamicForm formData={mockLoginFormData} />)
    expect(screen.getByText("login")).toBeInTheDocument()
    expect(screen.getByLabelText("username")).toBeInTheDocument()
    expect(screen.getByLabelText("password")).toBeInTheDocument()
  })
})
