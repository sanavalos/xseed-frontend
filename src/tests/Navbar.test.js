import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar rendering", () => {
  afterEach(cleanup);

  test("renders AppBar mui component correctly", () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>
    );
    const header = document.querySelector("header");
    expect(header).toBeInTheDocument();
  });
});
