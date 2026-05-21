import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DynamicForm from "./DynamicForm"
import { DynamicFormData } from "../types"

const mockLoginFormData = {
  id: 1,
  name: "login",
  elements: [
    { config: { type: "text" }, field: "username", element: "input" },
    { config: { type: "password" }, field: "password", element: "input" },
  ],
} satisfies DynamicFormData

const mockCheckboxFormData = {
  id: 2,
  name: "checkbox",
  elements: [
    {
      element: "checkbox",
      field: "checkBoxDemo",
      config: { checkboxOptions: ["foo", "bar", "baz"] },
    },
  ],
} satisfies DynamicFormData

describe("DynamicForm", () => {
  const props = {
    formData: mockLoginFormData,
    action: jest.fn(),
  }

  it("renders", () => {
    render(<DynamicForm {...props} />)
    expect(screen.getByText("Login")).toBeInTheDocument()
    expect(screen.getByLabelText("Username")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
  })

  it("records and submits data", async () => {
    render(<DynamicForm {...props} />)
    await userEvent.type(screen.getByLabelText("Username"), "foo")
    await userEvent.type(screen.getByLabelText("Password"), "bar")
    await userEvent.click(screen.getByText("Submit"))
    expect(props.action).toHaveBeenCalled()
  })

  it("records and submits checkboxes", async () => {
    render(<DynamicForm {...props} formData={mockCheckboxFormData} />)
    expect(screen.getByText("Checkbox")).toBeInTheDocument()
    await userEvent.click(screen.getByLabelText("Foo"))
    expect(props.action).toHaveBeenCalled()
  })
})
