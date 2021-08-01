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

export const searchAlbums = (query) => search(query, "album");
export const searchTracks = (query) => search(query, "track");
export const searchPlaylists = (query) => search(query, "playlist");
