import { cleanup } from "@testing-library/react";
import store from "../store";

describe("Navbar rendering", () => {
  afterEach(cleanup);

  test("store is initialized with characters, planets & favorites", () => {
    expect(store.getState().characters).toBeTruthy();
    expect(store.getState().planets).toBeTruthy();
    expect(store.getState().favorites).toBeTruthy();
  });
});
