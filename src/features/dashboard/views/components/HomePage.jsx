import { useEffect } from "react";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
import {
  setAllUserSongs,
  setFoldersWithCover,
} from "../../store/action/dashboardAction";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import FolderSection from "./HomePageFolder";
import ArtistsSection from "./HomePageArtist";
import AlbumsSection from "./HomePageAlbums";
import AllSongsSection from "./HomePageAllSongs";
import getAllUserSongs from "../../services/getAllUserSongs";

const HomePage = ({ foldersWithSongs, dispatch, audioRef }) => {
  const {
    foldersWithCover,
    allArtistWithSongs,
    allAlbumWithSongs,
    allUserSongs,
  } = useSelector((state) => state.dashboard);

  const getFolders = () => {
    let folders = [];
    Object.entries(foldersWithSongs).map(
      ([folder, songs], index) =>
        (folders = [
          ...folders,
          {
            id: index,
            name: folder.split("/")[folder.split("/").length - 1],
            cover: `${ImageBaseURL}/${songs[0].albumArtUrl}`,
            songs: songs,
          },
        ])
    );
    return folders;
  };

  const fetchUser = async () => {
    try {
      dispatch(setFoldersWithCover(getFolders()));
      const apiAllUserSongs = await getAllUserSongs();
      await dispatch(setAllUserSongs(apiAllUserSongs));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [foldersWithSongs]);

  const artists = [
    {
      id: 1,
      name: "Artist 1",
      avatarUrl: "https://source.unsplash.com/random/1",
    },
    {
      id: 2,
      name: "Artist 2",
      avatarUrl: "https://source.unsplash.com/random/2",
    },
    {
      id: 3,
      name: "Artist 3",
      avatarUrl: "https://source.unsplash.com/random/3",
    },
    {
      id: 4,
      name: "Artist 4",
      avatarUrl: "https://source.unsplash.com/random/4",
    },
    {
      id: 5,
      name: "Artist 5",
      avatarUrl: "https://source.unsplash.com/random/5",
    },
    {
      id: 6,
      name: "Artist 6",
      avatarUrl: "https://source.unsplash.com/random/6",
    },
    {
      id: 7,
      name: "Artist 7",
      avatarUrl: "https://source.unsplash.com/random/7",
    },
    {
      id: 8,
      name: "Artist 8",
      avatarUrl: "https://source.unsplash.com/random/8",
    },
    {
      id: 9,
      name: "Artist 9",
      avatarUrl: "https://source.unsplash.com/random/9",
    },

    {
      id: 10,
      name: "Artist 10",
      avatarUrl: "https://source.unsplash.com/random/10",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
    {
      id: 11,
      name: "Artist 11",
      avatarUrl: "https://source.unsplash.com/random/11",
    },
  ];

  const songs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      playCount: 10,
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      playCount: 8,
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      playCount: 6,
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
      playCount: 4,
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
      playCount: 2,
    },
    {
      id: 6,
      title: "Song 6",
      artist: "Artist 6",
      album: "Album 6",
      playCount: 1,
    },
    {
      id: 7,
      title: "Song 7",
      artist: "Artist 1",
      album: "Album 1",
      playCount: 0,
    },
    {
      id: 8,
      title: "Song 8",
      artist: "Artist 2",
      album: "Album 2",
      playCount: 0,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "10px",
        background: "linear-gradient(180deg, #585858,#181818, #121212)",
        m: 1,
        p: 4,
      }}
    >
      {/* Folder Section */}
      <FolderSection dispatch={dispatch} foldersWithCover={foldersWithCover} />

      {/* Artist Section */}
      <ArtistsSection artists={allArtistWithSongs} dispatch={dispatch} />
      {/* Album Section */}
      <AlbumsSection albums={allAlbumWithSongs} dispatch={dispatch} />
      {/* Songs Section */}
      {allUserSongs.length != 0 && (
        <AllSongsSection
          allSongs={allUserSongs}
          dispatch={dispatch}
          audioRef={audioRef}
        />
      )}
    </Box>
  );
};

export default HomePage;
