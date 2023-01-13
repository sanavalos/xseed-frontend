import React from "react";
import { render, cleanup } from "@testing-library/react";
import Favorites from "../pages/Favorites";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Favorites rendering", () => {
  afterEach(cleanup);

  it("renders both route options", () => {
    render(
      <Router>
        <Provider store={store}>
          <Favorites />
        </Provider>
      </Router>
    );
    const input = document.querySelector("input");
    expect(input.value).toBe("");
  });
});
