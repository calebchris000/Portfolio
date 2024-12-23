import { writable } from "svelte/store";

const def = {
  showImageModal: false,
  imageModalUrl: "",
};
export const store = writable(def);
