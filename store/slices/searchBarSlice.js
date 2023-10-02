import { createSlice } from "@reduxjs/toolkit";

const searchbarSlice = createSlice({
  name: "searchBar",
  initialState: {
    region: {
      open: false,
      value: null,
    },
    game: {
      open: false,
      value: null,
    },
    search: {
      open: false,
      value: null,
    },
  },
  reducers: {
    updateRegionValue(state, action) {
      state.region.value = action.payload;
    },
    updateRegionOpen(state, action) {
      state.region.open = action.payload;
      if (action.payload === true) {
        state.game.open = false;
        state.search.open = false;
      }
    },
    updateGameValue(state, action) {
      state.game.value = action.payload;
    },
    updateGameOpen(state, action) {
      state.game.open = action.payload;
      if (action.payload === true) {
        state.region.open = false;
        state.search.open = false;
      }
    },
    updateSearchValue(state, action) {
      state.search.value = action.payload;
    },
    updateSearchOpen(state, action) {
      state.search.open = action.payload;
      if (action.payload === true) {
        state.region.open = false;
        state.game.open = false;
      }
    },
  },
});

export const {
  updateRegionValue,
  updateRegionOpen,
  updateGameValue,
  updateGameOpen,
  updateSearchValue,
  updateSearchOpen,
} = searchbarSlice.actions;

export default searchbarSlice;
