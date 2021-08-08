global.fetch = require("node-fetch");
export const search = async (search, type) => {
  try {
    const resp = await fetch(
      `${process.env.BASE_URL}search?q=${search}&type=${type}`
    );
    const result = resp.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const searcher = (search, type) =>
  `${process.env.BASE_URL}search?q=${search}&type=${type}`;

export default function () {
  return {
    searchAlbums: (query) => this.request(searcher(query, "album")),
    searchTracks: (query) => this.request(searcher(query, "track")),
    searchPlaylists: (query) => this.request(searcher(query, "playlist")),
  };
}

export const searchAlbums = (query) => search(query, "album");
export const searchTracks = (query) => search(query, "track");
export const searchPlaylists = (query) => search(query, "playlist");
