import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    selected: [],
    inList: [],
  },
  reducers: {
    addSelected: {
      reducer(state, action) {
        state.selected = [...state.selected, action.payload];
        console.log("action:", state.selected);
      },
      prepare(items) {
        return {
          // payload: {
          //   id,
          //   title,
          //   amean,
          // },
          payload: items,
        };
      },
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.selected = [...state.selected, action.payload];
    },
    // deleteSelected: (state, action) => {
    //   const index = state.selected.findIndex(
    //     (job) => job.id === action.payload.id
    //   );
    //   if (index >= 0) {
    //     let newSelected = [...state.selected];
    //     newSelected.splice(index, 1);
    //   } else {
    //     console.warn("can't find the job item to remove: " + action.id);
    //   }
    // },

    addToList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.inList = [...state.inList, ...state.selected];
      state.selected = [];
      console.log("inList:", state.inList);
    },
    deleteFromList: (state, action) => {
      const index = state.inList.findIndex(
        (job) => job.id === action.payload.id
      );
      if (index >= 0) {
        let newList = [...state.inList];
        newList.splice(index, 1);
      } else {
        console.warn("can't find the job item to remove: " + action.id);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSelected, addToList, deleteFromList } = jobSlice.actions;

export default jobSlice.reducer;
