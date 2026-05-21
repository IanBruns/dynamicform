import { render, screen } from "@testing-library/react"
import Home from "./page"

describe("Page", () => {
  it("renders the page", () => {
    render(<Home />)
    expect(screen.getByText("Login Page Demo")).toBeInTheDocument()
    expect(screen.getByText("Demographics Page Demo")).toBeInTheDocument()
  })
})
