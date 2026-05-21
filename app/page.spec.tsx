import { render, screen } from "@testing-library/react"
import Home from "./page"

describe("Page", () => {
  it("renders the page", () => {
    render(<Home />)
    expect(screen.getByText("Hi")).toBeInTheDocument()
  })
})
