import { useEffect } from "react";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import {
  setFolderSongListTabVisible,
  setFoldersWithCover,
  setHomePageTabVisible,
  setQueueTabVisible,
  setSelectedFolder,
} from "../store/action/dashboardAction";
import { useSelector } from "react-redux";

const HomePage = ({ foldersWithSongs, dispatch, setFolderSongs }) => {
  const { foldersWithCover } = useSelector((state) => state.dashboard);

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

  useEffect(() => {
    dispatch(setFoldersWithCover(getFolders()));
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

  const mostPlayedSongs = songs
    .sort((a, b) => b.playCount - a.playCount)
    .slice(0, 8);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="font-bold text-4xl mb-2">Folders</h1>
        <div className="grid grid-cols-3 gap-4">
          {foldersWithCover.slice(0, 6).map((folder) => (
            <div
              key={folder.id}
              className="flex-shrink-0 mr-4 bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="flex">
                <img
                  src={folder.cover}
                  alt={folder.name}
                  className="w-32 h-32 object-contain hover:animate-pulse"
                />
                <button
                  className="font-medium text-lg mb-2 ml-4"
                  onClick={() => {
                    dispatch(setFolderSongs(folder.songs));
                    dispatch(
                      setSelectedFolder(
                        folder.name.split("/")[
                          folder.name.split("/").length - 1
                        ]
                      )
                    );
                    dispatch(setFolderSongListTabVisible(true));
                    dispatch(setQueueTabVisible(false));
                    dispatch(setHomePageTabVisible(false));
                  }}
                >
                  {folder.name.split("/")[folder.name.split("/").length - 1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="font-bold mb-2">Artists</div>
        <div className="grid grid-cols-3 gap-4">
          {artists.slice(0, 6).map((artist) => (
            <div key={artist.id} className="bg-gray-200 p-4 rounded-lg">
              <img
                src={artist.avatarUrl}
                alt={artist.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <div>{artist.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold mb-2">Most Played Songs</div>
        <div>
          {mostPlayedSongs.map((song) => (
            <div key={song.id} className="flex items-center py-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="ml-2">
                <div className="font-medium">{song.title}</div>
                <div className="text-gray-500 text-sm">{`${song.artist} • ${song.album}`}</div>
              </div>
              <div className="ml-auto text-gray-500">{song.playCount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
