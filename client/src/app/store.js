import { configureStore, createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export default store;