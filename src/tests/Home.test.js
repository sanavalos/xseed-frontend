import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home rendering", () => {
  afterEach(cleanup);

  it("renders component correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(getByTestId("home")).toBeTruthy();
  });

  it("find both route options", () => {
    const { findAllByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(findAllByText("characters")).toBeTruthy();
    expect(findAllByText("favorites")).toBeTruthy();
  });
});
