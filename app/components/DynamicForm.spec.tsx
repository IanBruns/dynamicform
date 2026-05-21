import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DynamicForm from "./DynamicForm"
import { DynamicFormData } from "../types"

const mockLoginFormData = {
  id: 1,
  name: "login",
  elements: [
    { options: { type: "text" }, field: "username", element: "input" },
    { options: { type: "password" }, field: "password", element: "input" },
  ],
} satisfies DynamicFormData

const mockCheckboxFormData = {
  id: 2,
  name: "checkbox",
  elements: [
    {
      element: "checkbox",
      field: "checkBoxDemo",
      options: { checkboxOptions: ["foo", "bar", "baz"] },
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
    expect(screen.getByText("login")).toBeInTheDocument()
    expect(screen.getByLabelText("username")).toBeInTheDocument()
    expect(screen.getByLabelText("password")).toBeInTheDocument()
  })

  it("records and submits data", async () => {
    render(<DynamicForm {...props} />)
    await userEvent.type(screen.getByLabelText("username"), "foo")
    await userEvent.type(screen.getByLabelText("password"), "bar")
    await userEvent.click(screen.getByText("Submit"))
    expect(props.action).toHaveBeenCalled()
  })

  it("records and submits checkboxes", async () => {
    render(<DynamicForm {...props} formData={mockCheckboxFormData} />)
    expect(screen.getByText("checkbox")).toBeInTheDocument()
    await userEvent.click(screen.getByLabelText("foo"))
    expect(props.action).toHaveBeenCalled()
  })
})
