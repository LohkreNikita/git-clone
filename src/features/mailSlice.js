import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpne: false,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpne = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpne = false;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  selectedMail,
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMesssageOpne = (state) => state.mail.sendMessageIsOpne;

export default mailSlice.reducer;
