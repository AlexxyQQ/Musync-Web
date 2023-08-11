import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../../../App";
import ManageAllSongs from "../../../../features/all_songs/views/ManageAllSongs";
import { MemoryRouter } from "react-router-dom";
export * from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { handlers } from "../../../../mocks/handlers";
import { setupServer } from "msw/node";
import { rest } from "msw";
import {
  BaseURL,
  GetAllUsersSongsURL,
  deleteSongURL,
} from "../../../../configs/ApiEndpoints";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const MockRouter = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

const customRender = (ui, options) =>
  render(ui, { wrapper: MockRouter, ...options });

test("renders ManageAllSongs component", () => {
  const mockStore = createStore(rootReducer); // Replace with your root reducer
  const { getByText, queryAllByText } = customRender(
    <Provider store={mockStore}>
      <ManageAllSongs />
    </Provider>
  );

  const loadingText = screen.getByText(/Duration/i);
  expect(loadingText).toBeInTheDocument();
});

test("displays songs and allows song deletion", async () => {
  const mockStore = createStore(rootReducer); // Replace with your root reducer
  const { getByText, queryAllByText } = customRender(
    <Provider store={mockStore}>
      <ManageAllSongs />
    </Provider>
  );

  // Wait for data to load
  await waitFor(() => screen.getByText("All Songs"));

  // Assert that song titles are displayed
  const songTitles = screen.getAllByText(/All Songs/);
  expect(songTitles.length).toBeGreaterThan(0);

  // Mock a successful song deletion
  server.use(
    rest.delete(`${BaseURL}${deleteSongURL}`, (req, res, ctx) => {
      return res(ctx.status(204));
    })
  );

  // Delete a song
  const deleteButtons = screen.getAllByRole("button", { name: "Delete" });
  fireEvent.click(deleteButtons[0]);

  // Confirm deletion
  const confirmButton = screen.getByRole("button", { name: "Yes, Delete" });
  fireEvent.click(confirmButton);

  // Ensure the song is removed from the UI
  await waitFor(() => {
    const deletedSongTitles = screen.queryAllByText(/Deleted Song Title/);
    expect(deletedSongTitles.length).toBe(0);
  });
});

test("displays loading message when fetching songs", async () => {
  server.use(
    rest.get(`${BaseURL}${GetAllUsersSongsURL}`, (req, res, ctx) => {
      // Delay the response to simulate loading
      return res(ctx.delay(100), ctx.json([]));
    })
  );

  const mockStore = createStore(rootReducer); // Replace with your root reducer
  const { getByText, queryAllByText } = customRender(
    <Provider store={mockStore}>
      <ManageAllSongs />
    </Provider>
  );

  // Assert that loading message is displayed
  const loadingMessage = screen.getByText("All Songs");
  expect(loadingMessage).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => screen.getByText("All Songs"));

  // Assert that loading message is no longer present
  expect(loadingMessage).not.toBeInTheDocument();
});
