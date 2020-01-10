import {
  GET_BUGS,
  SET_LOADING,
  BUGS_ERROR,
  ADD_BUG,
  DELETE_BUG,
  UPDATE_BUG,
  SEARCH_BUGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// Get bugs from server.
export const getBugs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/bugs');
    const data = await res.json();

    dispatch({
      type: GET_BUGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new bug to server.
export const addBug = bug => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/bugs', {
      method: 'POST',
      body: JSON.stringify(bug),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_BUG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete bug from server.
export const deleteBug = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/bugs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_BUG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update bug on server.
export const updateBug = bug => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/bugs/${bug.id}`, {
      method: 'PUT',
      body: JSON.stringify(bug),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_BUG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search bugs from server.
export const searchBugs = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/bugs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_BUGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current bug.
export const setCurrent = bug => {
  return {
    type: SET_CURRENT,
    payload: bug
  };
};

// Clear current bug.
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true.
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
