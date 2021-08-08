import { search, searchAlbums, searchTracks, searchPlaylists } from "./wrapper";
const mockResponse = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem mock",
    completed: false,
  },
];
const fecthMock = jest.fn();

const oldEnv = Object.assign({}, process.env);

global.fetch = fecthMock;

describe("Spotify Wrapper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fecthMock.mockResolvedValueOnce({
      json: async () => Promise.resolve(mockResponse),
    });
  });

  afterEach(() => {
    process.env = oldEnv;
  });

  describe("smoke tests", () => {
    test("should exists the search method", () => {
      expect(typeof search).toBe("function");
    });

    test("should exists the searchAlbums method", () => {
      expect(typeof searchAlbums).toBe("function");
    });

    test("should exists the searchTracks method", () => {
      expect(typeof searchTracks).toBe("function");
    });

    test("should exists the searchPlaylists method", () => {
      expect(typeof searchPlaylists).toBe("function");
    });
  });

  describe("Generic search", () => {
    test("should call fecth function with response", async () => {
      const result = await search("Incubus", "album");
      expect(fecthMock).toBeCalledTimes(1);
      expect(result).toStrictEqual(mockResponse);
    });

    test("should call function with URL defined", async () => {
      process.env.BASE_URL = "https://spotify-mock.io/";
      await search("Incubus", "album");
      expect(fecthMock).toBeCalledWith(
        "https://spotify-mock.io/search?q=Incubus&type=album"
      );
    });

    test("should return exception", async () => {
      fecthMock.mockReset();
      fecthMock.mockRejectedValue("fail");

      try {
        const result = await search("Incubus", "album");
      } catch (error) {
        expect(error).toBe("fail");
      }
    });
  });

  describe("Search Albums", () => {
    test("should call fecth function", async () => {
      await searchAlbums("Muse");
      expect(fecthMock).toBeCalledTimes(1);
    });

    test("should call function with URL defined", async () => {
      process.env.BASE_URL = "https://spotify-mock.io/";
      await searchAlbums("Muse");
      expect(fecthMock).toBeCalledWith(
        "https://spotify-mock.io/search?q=Muse&type=album"
      );
    });
  });

  describe("Search Playlists", () => {
    test("should call fecth function", async () => {
      await searchPlaylists("Muse");
      expect(fecthMock).toBeCalledTimes(1);
    });

    test("should call function with URL defined", async () => {
      process.env.BASE_URL = "https://spotify-mock.io/";
      await searchPlaylists("Muse");
      expect(fecthMock).toBeCalledWith(
        "https://spotify-mock.io/search?q=Muse&type=playlist"
      );
    });
  });

  describe("Search Track", () => {
    test("should call fecth function", async () => {
      await searchTracks("Muse");
      expect(fecthMock).toBeCalledTimes(1);
    });

    test("should call function with URL defined", async () => {
      process.env.BASE_URL = "https://spotify-mock.io/";
      await searchTracks("Muse");
      expect(fecthMock).toBeCalledWith(
        "https://spotify-mock.io/search?q=Muse&type=track"
      );
    });
  });
});
