import axios from "axios";
import { ATTEND, DECLINE } from "./types";

export const attend = values => async dispatch => {
  console.log(values);
  var obj = {
    id: values.id,
    listing: values.listing
  };
  console.log(obj);
  const res = await axios.post("https://7bbca91f.ngrok.io/api/accept", obj);

  dispatch({ type: ATTEND, payload: res.data });
};

export const decline = id => async dispatch => {
  const res = await axios.post("https://7bbca91f.ngrok.io/api/decline", id);

  dispatch({ type: DECLINE, payload: res.data });
};
