// formDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialData = [
  {
    "Name": "Aryan Singh",
    "DOB": "2000-08-04",
    "Salary": "20000",
    "JoiningDate": "2022-08-04",
    "RelievingDate": "",
    "Contact": "7253968996",
  },
  {
    "Name": "Aryan Singh",
    "DOB": "2000-08-04",
    "Salary": "20000",
    "JoiningDate": "2022-08-04",
    "RelievingDate": "",
    "Contact": "7253968996",
  },
  {
    "Name": "Aryan Singh",
    "DOB": "2000-08-04",
    "Salary": "20000",
    "JoiningDate": "2022-08-04",
    "RelievingDate": "",
    "Contact": "7253968996",
  },
];

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    formData: initialData,
  },
  reducers: {
      addFormData: (state, action) => {
        state.formData.push(action.payload);
      },
      editFormData: (state, action) => {
        const { index, formData } = action.payload;
        if (index >= 0 && index < state.formData.length) {
          state.formData[index] = { ...state.formData[index], ...formData };
        }
      },
      deleteFormData: (state, action) => {
        const indexToDelete = action.payload;
        if (indexToDelete >= 0 && indexToDelete < state.formData.length) {
          state.formData.splice(indexToDelete, 1);
        }
      },
  },
});

export const { addFormData,editFormData,deleteFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
