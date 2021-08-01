global.fetch = require("node-fetch");
import { searchAlbums } from "./services/wrapper";

const result = searchAlbums("Incubus");
console.info("result", result);
