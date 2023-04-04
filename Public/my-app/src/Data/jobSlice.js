import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";

//locat previous job in browser local storage
const allSelectedJobs = loadState();

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    selected: [],
    inList: allSelectedJobs.savedJobs,
    dropDownIsVisible: false,
    allSelectedJobs: allSelectedJobs.savedJobs,
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
      state.inList = [...state.inList, ...state.selected];
      state.selected = [];
      state.allSelectedJobs = loadState();
    },

    deleteFromList: (state, action) => {
      const index = state.inList.findIndex(
        (job) => job.id === action.payload.id
      );
      if (index >= 0) {
        let newList = [...state.inList];
        newList.splice(index, 1);
        state.inList = newList;
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
