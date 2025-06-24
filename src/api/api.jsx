import axios from "axios";

const URL = "http://localhost:3000";

const Api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json;",
    Accept: "application/json",
  },
});

export default {
  getUsuarios: async () =>
    await Api.get("/users").then((result) => result.data),
  getPosts: async () => await Api.get("/posts").then((result) => result.data),
  deletePost: async (item) => await Api.delete(`/posts/${item.id}`),
  createPost: async (item) => await Api.post("/posts", item),
};
