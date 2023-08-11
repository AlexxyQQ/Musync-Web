import { rest } from "msw";
import {
  BaseURL,
  GetAllUsersSongsURL,
  deleteSongURL,
  getAllUsersURL,
  getUserDataURL,
} from "../configs/ApiEndpoints";

const handlers = [
  // Mocked response for the getAllUsers request handler
  rest.get(`${BaseURL}${getAllUsersURL}`, (req, res, ctx) => {
    const users = [{}];
    return res(ctx.status(200), ctx.json(users));
  }),

  // Mocked response for the getUserData request handler
  rest.post(`${BaseURL}${getUserDataURL}`, (req, res, ctx) => {
    const { userId } = req.body;
    // Define your mock user data for the specified userId here
    const userData = {
      // Mock user data
    };
    return res(ctx.status(200), ctx.json(userData));
  }),

  // Mocked response for the getAllAlbumsWithSongs request handler
  rest.post(`${BaseURL}${deleteSongURL}`, (req, res, ctx) => {
    // Simulate a successful response
    return res(
      ctx.status(200),
      ctx.json({
        newSong: {
          // Mock new song data
        },
      })
    );
  }),

  // Mocked response for the getAllUserSongs request handler
  rest.post(`${BaseURL}${GetAllUsersSongsURL}`, (req, res, ctx) => {
    // Simulate a successful response
    return res(
      ctx.status(200),
      ctx.json({
        songs: [
          {
            // Mock song data
          },
        ],
      })
    );
  }),
];

export { handlers };
