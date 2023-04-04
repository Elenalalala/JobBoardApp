import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localStorage";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    selected: [],
    inList: [],
    dropDownIsVisible: false,
    allSelectedJobs: loadState(),
  },
  reducers: {
    addSelected: {
      reducer(state, action) {
        const index = state.inList.findIndex(
          (job) => job.id === action.payload.id
        );
        //if there is no existing item in the selected
        if (index < 0) {
          state.selected = [...state.selected, action.payload];
          console.log("action:", state.selected);
        }
      },
      prepare(items) {
        return {
          payload: items,
        };
      },
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

    addToList: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.inList = [...state.inList, ...state.selected];
      state.selected = [];
      console.log("inList:", state.inList);
      state.allSelectedJobs = loadState();
      console.log("savedJobs::::::", state.allSelectedJobs.savedJobs);
    },

    deleteFromList: (state, action) => {
      const index = state.inList.findIndex(
        (job) => job.id === action.payload.id
      );
      console.log("deleteFromList: " + index, action);
      if (index >= 0) {
        let newList = [...state.inList];
        newList.splice(index, 1);
        state.inList = newList;
        console.log("newList###: ", state.inList);
      } else {
        console.warn("can't find the job item to remove: " + action.id);
      }
    },
    toggleDropDown: (state, action) => {
      state.dropDownIsVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSelected, addToList, deleteFromList, toggleDropDown } =
  jobSlice.actions;

export default jobSlice.reducer;
