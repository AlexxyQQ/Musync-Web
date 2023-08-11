import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect"; // Import the toBeInTheDocument matcher
import NavBar from "../../../../../features/admin/view/components/NavBar";

test("render navigateion bar", () => {
  render(<NavBar />);
  expect(screen.getByText("Admin Pannel")).toBeInTheDocument();
});
