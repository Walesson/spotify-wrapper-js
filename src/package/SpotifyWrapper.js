import search from "./wrapper";
export default class SpotifyWrapper {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl || process.env.BASE_URL;
    this.token = token;
    this.search = search.bind(this)();
  }

  async request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    const resp = await fetch(url, headers);
    return resp.json();
  }
}
