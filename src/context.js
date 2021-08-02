import React, { useState, useContext, useReducer, useEffect } from "react";
import axios from "axios";

import {
  OPEN_OVERLAY,
  CLOSE_OVERLAY,
  START_LOADING,
  STOP_LOADING,
  SEASONS_DATA_REQUEST,
  SEASONS_DATA,
  SINGLE_SEASON_DATA_REQUEST,
  SINGLE_SEASON_DATA,
} from "./actions";

import reducer from "./reducer";

const initialState = {
  is_overlay_open: false,
  is_loading: false,
  seasons: [],
  single_season: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openOverlay = () => {
    dispatch({ type: OPEN_OVERLAY });
  };
  const closeOverlay = () => {
    dispatch({ type: CLOSE_OVERLAY });
  };

  const loadStart = () => {
    dispatch({ type: START_LOADING });
  };

  const loadStop = () => {
    dispatch({ type: STOP_LOADING });
  };

  const api = axios.create({
    baseURL: "https://wire-server.herokuapp.com/",
  });

  const fetchSeasonsData = async () => {
    dispatch({ type: SEASONS_DATA_REQUEST });
    try {
      const response = await api.get("seasons");
      const seasons = await response.data;
      dispatch({ type: SEASONS_DATA, payload: seasons });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllData = async (id) => {
    dispatch({ type: SINGLE_SEASON_DATA_REQUEST });
    try {
      const response = await api.get(`seasons/${id}/images`);
      const single_season = await response.data;
      console.log(single_season);
      dispatch({ type: SINGLE_SEASON_DATA, payload: single_season });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeasonsData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openOverlay,
        closeOverlay,
        loadStart,
        loadStop,
        fetchAllData,
        api,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
