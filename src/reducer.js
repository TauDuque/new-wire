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

const reducer = (state, action) => {
  if (action.type === OPEN_OVERLAY) {
    return { ...state, is_overlay_open: true };
  }
  if (action.type === CLOSE_OVERLAY) {
    return { ...state, is_overlay_open: false };
  }

  if (action.type === START_LOADING) {
    return { ...state, is_loading: true };
  }

  if (action.type === STOP_LOADING) {
    return { ...state, is_loading: false };
  }

  if (action.type === SEASONS_DATA_REQUEST) {
    return { ...state, is_loading: true };
  }

  if (action.type === SEASONS_DATA) {
    return { ...state, is_loading: false, seasons: action.payload };
  }

  if (action.type === SINGLE_SEASON_DATA_REQUEST) {
    return { ...state, is_loading: true };
  }

  if (action.type === SINGLE_SEASON_DATA) {
    return { ...state, is_loading: false, single_season: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
