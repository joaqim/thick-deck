/** @jest-environment jsdom */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Hello } from "components/Hello";

test("renders ", () => {
  render(<Hello message="Hello World!" />);
  const textElement = screen.getByText(/Hello World!/i);
  expect(textElement).toBeInTheDocument();
});
