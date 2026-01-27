import { createSlice } from "@reduxjs/toolkit";
import homeData from "../data/home.json";
import globalData from "../data/global.json";
import servicesData from "../data/services.json";
import servicesMenuData from "../data/servicesMenu.json";

const initialState = {
  home: homeData,
  global: globalData,
  services: servicesData.services,
  servicesMenu: servicesMenuData,
  status: "idle",
  error: null,
};

const cmsSlice = createSlice({
  name: "cms",
  initialState,
  reducers: {
    setHome(state, action) {
      state.home = action.payload;
    },
    setGlobal(state, action) {
      state.global = action.payload;
    },
    setServices(state, action) {
      state.services = action.payload;
    },
    setServicesMenu(state, action) {
      state.servicesMenu = action.payload;
    },
  },
});

export const { setHome, setGlobal, setServices, setServicesMenu } =
  cmsSlice.actions;

export const selectHome = (state) => state.cms.home;
export const selectGlobal = (state) => state.cms.global;
export const selectServices = (state) => state.cms.services;
export const selectServicesMenu = (state) => state.cms.servicesMenu;

export default cmsSlice.reducer;

