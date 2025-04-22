import { createStore } from "zustand/vanilla";

const assetsToLoad = [
  {
    path: "/textures/crate.gif",
    id: "crate",
    type: "texture",
  },
  {
    path: "/textures/golfball.jpg",
    id: "golfball",
    type: "texture",
  },
];

const assetStore = createStore((set) => ({
  assetsToLoad,
  loadedAssets: {},
  addLoadedAsset: (asset, id) =>
    set((state) => ({
      loadedAssets: {
        ...state.loadedAssets,
        [id]: asset,
      },
    })),
}));

export default assetStore;
