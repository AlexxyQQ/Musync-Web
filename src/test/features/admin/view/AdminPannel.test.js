import React from "react";
import { render,screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../../../App";
import AdminPannel from "../../../../features/admin/view/AdminPannel";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";


test("renders AdminPannel component", async () => {
  const mockStore = createStore(rootReducer); // Replace with your root reducer
  const { getByText, queryAllByText } = render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <AdminPannel />
      </MemoryRouter>
    </Provider>
  );

  // Check if certain elements are present on the rendered component
  const adminPannel = screen.getByText("Admin Pannel");

  expect(adminPannel).toBeInTheDocument();
});
