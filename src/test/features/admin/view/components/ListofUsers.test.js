import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import ListofUsers from "../../../../../features/admin/view/components/ListofUsers";

test("renders UserItem component with user details", () => {
  // Mock data for a user
  const mockUser = {
    '{"_id":"64cf1214c162a7e4a7f08b39","username":"alexxy","email":"aayushpandey616@gmail.com","password":"$2a$12$vNLiYwCC2SxCzkhdVhlqK.y/fiDX3.2oOVuuyHF2lK8E3Ad9G3IZO","profilePic":"public\\\\uploads\\\\alexxy\\\\profilePic\\\\a166034336a28bf71f7b05e8f758ae37.png","verified":false,"type":"manual","__v":0}':
      [
        [
          {
            _id: "64d21c5bd880ee44c89596d9",
            id: 1000000190,
            serverUrl:
              "public/uploads/alexxy/M2101K6G/Music/BoyWithUke/BoyWithUke - Kind of Sick of Life.mp3",
            data: "/storage/C093-1318/Music/BoyWithUke/BoyWithUke - Kind of Sick of Life.mp3",
            uri: "content://media/external/audio/media/1000000190",
            displayName: "BoyWithUke - Kind of Sick of Life.mp3",
            displayNameWOExt: "BoyWithUke - Kind of Sick of Life",
            size: 6369830,
            album: "Fever Dreams",
            albumId: "7820269359130160455",
            artist: "BoyWithUke",
            artistId: "814061804453757479",
            genre: "",
            genreId: "",
            bookmark: 0,
            composer: "",
            dateAdded: 1690476022,
            dateModified: 1664853566,
            duration: 153051,
            title: "Kind of Sick of Life",
            track: 7,
            fileExtension: "mp3",
            isAlarm: false,
            isAudioBook: false,
            isNotification: false,
            isPodcast: false,
            isRingtone: false,
            albumArt:
              "/data/user/0/com.alexxy.musync/app_flutter/BoyWithUke - Kind of Sick of Life.png",
            albumArtUrl:
              "public\\uploads\\alexxy\\M2101K6G\\Music\\BoyWithUke\\1000000190.png",
            isPublic: true,
            __v: 0,
          },
          {
            _id: "64d21c5bd880ee44c89596dc",
            id: 1000000191,
            serverUrl:
              "public/uploads/alexxy/M2101K6G/Music/BoyWithUke/BoyWithUke - Let Me Down.mp3",
            data: "/storage/C093-1318/Music/BoyWithUke/BoyWithUke - Let Me Down.mp3",
            uri: "content://media/external/audio/media/1000000191",
            displayName: "BoyWithUke - Let Me Down.mp3",
            displayNameWOExt: "BoyWithUke - Let Me Down",
            size: 7495983,
            album: "Serotonin Dreams",
            albumId: "2462704104802784385",
            artist: "BoyWithUke",
            artistId: "814061804453757479",
            genre: "",
            genreId: "",
            bookmark: 0,
            composer: "",
            dateAdded: 1690476022,
            dateModified: 1664853630,
            duration: 184085,
            title: "Let Me Down",
            track: 3,
            fileExtension: "mp3",
            isAlarm: false,
            isAudioBook: false,
            isNotification: false,
            isPodcast: false,
            isRingtone: false,
            albumArt:
              "/data/user/0/com.alexxy.musync/app_flutter/BoyWithUke - Let Me Down.png",
            albumArtUrl:
              "public\\uploads\\alexxy\\M2101K6G\\Music\\BoyWithUke\\1000000191.png",
            isPublic: true,
            __v: 0,
          },
        ],
        [
          {
            _id: "64d21c57d880ee44c89596c7",
            id: 1000000184,
            serverUrl:
              "public/uploads/alexxy/M2101K6G/Music/BoyWithUke/BoyWithUke - Contigo.mp3",
            data: "/storage/C093-1318/Music/BoyWithUke/BoyWithUke - Contigo.mp3",
            uri: "content://media/external/audio/media/1000000184",
            displayName: "BoyWithUke - Contigo.mp3",
            displayNameWOExt: "BoyWithUke - Contigo",
            size: 6179132,
            album: "Serotonin Dreams",
            albumId: "2462704104802784385",
            artist: "BoyWithUke",
            artistId: "814061804453757479",
            genre: "",
            genreId: "",
            bookmark: 0,
            composer: "",
            dateAdded: 1690476022,
            dateModified: 1664853682,
            duration: 151197,
            title: "Contigo",
            track: 8,
            fileExtension: "mp3",
            isAlarm: false,
            isAudioBook: false,
            isNotification: false,
            isPodcast: false,
            isRingtone: false,
            albumArt:
              "/data/user/0/com.alexxy.musync/app_flutter/BoyWithUke - Contigo.png",
            albumArtUrl:
              "public\\uploads\\alexxy\\M2101K6G\\Music\\BoyWithUke\\1000000184.png",
            isPublic: false,
            __v: 0,
          },
          {
            _id: "64d21c5bd880ee44c89596d9",
            id: 1000000190,
            serverUrl:
              "public/uploads/alexxy/M2101K6G/Music/BoyWithUke/BoyWithUke - Kind of Sick of Life.mp3",
            data: "/storage/C093-1318/Music/BoyWithUke/BoyWithUke - Kind of Sick of Life.mp3",
            uri: "content://media/external/audio/media/1000000190",
            displayName: "BoyWithUke - Kind of Sick of Life.mp3",
            displayNameWOExt: "BoyWithUke - Kind of Sick of Life",
            size: 6369830,
            album: "Fever Dreams",
            albumId: "7820269359130160455",
            artist: "BoyWithUke",
            artistId: "814061804453757479",
            genre: "",
            genreId: "",
            bookmark: 0,
            composer: "",
            dateAdded: 1690476022,
            dateModified: 1664853566,
            duration: 153051,
            title: "Kind of Sick of Life",
            track: 7,
            fileExtension: "mp3",
            isAlarm: false,
            isAudioBook: false,
            isNotification: false,
            isPodcast: false,
            isRingtone: false,
            albumArt:
              "/data/user/0/com.alexxy.musync/app_flutter/BoyWithUke - Kind of Sick of Life.png",
            albumArtUrl:
              "public\\uploads\\alexxy\\M2101K6G\\Music\\BoyWithUke\\1000000190.png",
            isPublic: true,
            __v: 0,
          },
          {
            _id: "64d21c5bd880ee44c89596dc",
            id: 1000000191,
            serverUrl:
              "public/uploads/alexxy/M2101K6G/Music/BoyWithUke/BoyWithUke - Let Me Down.mp3",
            data: "/storage/C093-1318/Music/BoyWithUke/BoyWithUke - Let Me Down.mp3",
            uri: "content://media/external/audio/media/1000000191",
            displayName: "BoyWithUke - Let Me Down.mp3",
            displayNameWOExt: "BoyWithUke - Let Me Down",
            size: 7495983,
            album: "Serotonin Dreams",
            albumId: "2462704104802784385",
            artist: "BoyWithUke",
            artistId: "814061804453757479",
            genre: "",
            genreId: "",
            bookmark: 0,
            composer: "",
            dateAdded: 1690476022,
            dateModified: 1664853630,
            duration: 184085,
            title: "Let Me Down",
            track: 3,
            fileExtension: "mp3",
            isAlarm: false,
            isAudioBook: false,
            isNotification: false,
            isPodcast: false,
            isRingtone: false,
            albumArt:
              "/data/user/0/com.alexxy.musync/app_flutter/BoyWithUke - Let Me Down.png",
            albumArtUrl:
              "public\\uploads\\alexxy\\M2101K6G\\Music\\BoyWithUke\\1000000191.png",
            isPublic: true,
            __v: 0,
          },
          {
            _id: "64d21c5cd880ee44c89596df",
            id: 1000000192,
            serverUrl:
              "public/uploads/alexxy/M2101K6G/Music/BoyWithUke/BoyWithUke - Loafers.mp3",
            data: "/storage/C093-1318/Music/BoyWithUke/BoyWithUke - Loafers.mp3",
            uri: "content://media/external/audio/media/1000000192",
            displayName: "BoyWithUke - Loafers.mp3",
            displayNameWOExt: "BoyWithUke - Loafers",
            size: 8816602,
            album: "Faded",
            albumId: "4867983485702445110",
            artist: "BoyWithUke",
            artistId: "814061804453757479",
            genre: "",
            genreId: "",
            bookmark: 0,
            composer: "",
            dateAdded: 1690476022,
            dateModified: 1664853502,
            duration: 215432,
            title: "Loafers",
            track: 2,
            fileExtension: "mp3",
            isAlarm: false,
            isAudioBook: false,
            isNotification: false,
            isPodcast: false,
            isRingtone: false,
            albumArt:
              "/data/user/0/com.alexxy.musync/app_flutter/BoyWithUke - Loafers.png",
            albumArtUrl:
              "public\\uploads\\alexxy\\M2101K6G\\Music\\BoyWithUke\\1000000192.png",
            isPublic: true,
            __v: 0,
          },
        ],
      ],
    '{"_id":"64d455684a898e74bcc4f9ce","username":"admin","email":"admin@musync.com","password":"$2a$12$PVhZZoCtOS8GKlvjqv0ZNeWBEdOwLFNCcOL4NpeR4wbWM/qx/EiR2","profilePic":"https://i.imgur.com/Eyzrkg3.jpeg","verified":false,"type":"manual","__v":0}':
      [[], []],
  };

  render(<ListofUsers allUsers={mockUser} />);

  // Assertions for user details using toBeInTheDocument matcher
  expect(screen.getByText("aayushpandey616@gmail.com")).toBeInTheDocument();
  expect(screen.getByText("admin@musync.com")).toBeInTheDocument();
  // You can add more assertions for other user details or components within UserItem

  // You can further assert the specific number of songs or other song-related details
});
