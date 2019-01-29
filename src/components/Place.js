import { ADD_PLACE } from './Types';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}