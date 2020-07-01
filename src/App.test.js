import React from "react";
import {
  render,
  cleanup,
  debug,
  waitFor,
  findByText,
  getAllByTestId,
  findByTestId,
  fireEvent,
  getByText,
  getByLabelText,
  waitForDomChange
} from "@testing-library/react";

import App from "./App";

import "@testing-library/jest-dom";

import "@testing-library/jest-dom/extend-expect";

beforeEach(cleanup);

test("component rendered", async () => {
  let { getByTestId, getByText } = render(<App />);

  // console.log("test n ame", getByTestId("test"));
  expect(getByTestId("test")).toBeInTheDocument();
});

test("CodeSandbox is rendered or not", () => {
  let { getByText } = render(<App />);
  expect(getByText(/CodeSandbox/)).toBeInTheDocument();
});
