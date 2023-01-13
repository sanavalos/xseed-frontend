import React from "react";
import { render, cleanup } from "@testing-library/react";
import AppBar from "@mui/material/AppBar";

describe("Navbar rendering", () => {
  afterEach(cleanup);

  test("renders correctly", () => {
    const { getByTestId } = render(<AppBar data-testid="appbar" />);
    expect(getByTestId("appbar")).toBeTruthy();
  });
});
