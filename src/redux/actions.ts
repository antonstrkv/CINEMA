import { Action, Action_Set_List, Action_Set_Page, IfilmObject } from "src/types/types";
export const SORT_POPULARITY_DESCENDING: string = 'SORT_POPULARITY_DESCENDING';
export const SORT_POPULARITY_ASCENDING: string = 'SORT_POPULARITY_ASCENDING';
export const SORT_RATING_DESCENDING: string = 'SORT_RATING_DESCENDING';
export const SORT_RATING_ASCENDING: string = 'SORT_RATING_ASCENDING';
export const SET_NEW_CURRENT_PAGE: string = 'SET_NEW_CURRENT_PAGE';
export const LOG_IN: string = 'LOG_IN';
export const LOG_OUT: string = 'LOG_OUT';
export const ADD_FAVORITE_LIST: string = 'ADD_FAVORITE_LIST';
export const REMOVE_FAVORITE_LIST: string = 'REMOVE_FAVORITE_LIST';
export const ADD_TO_READ_LIST: string = 'ADD_TO_READ_LIST';
export const REMOVE_TO_READ_LIST: string = 'REMOVE_TO_READ_LIST';
export const FORM_AUTHORIZATION_OPEN: string = "FORM_AUTHORIZATION_OPEN";
export const FORM_AUTHORIZATION_CLOSE: string = "FORM_AUTHORIZATION_CLOSE";
export const SORT_FAVORITE_LIST: string = "SORT_FAVORITE_LIST";
export const SORT_TO_READ_LIST: string = "SORT_TO_READ_LIST";


export function sortPopularityDescendingList(): Action {
  return { type: SORT_POPULARITY_DESCENDING }
}

export function sortPopularityAscendingList(): Action {
  return { type: SORT_POPULARITY_ASCENDING }
}

export function sortRatingDescendingList(): Action {
  return { type: SORT_RATING_DESCENDING }
}

export function sortRatingAscendingList(): Action {
  return { type: SORT_RATING_ASCENDING }
}

export function setNewCurrentPage(newCurrentPage: number): Action_Set_Page {
  return { type: SET_NEW_CURRENT_PAGE, newCurrentPage }
}


export function logIn(): Action {
  return { type: LOG_IN }
}

export function logOut(): Action {
  return { type: LOG_OUT }
}

export function addFavoriteList(filmObject: IfilmObject): Action_Set_List {
  return { type: ADD_FAVORITE_LIST, filmObject };
}

export function removeFavoriteList(filmObject: IfilmObject): Action_Set_List {
  return { type: REMOVE_FAVORITE_LIST, filmObject };
}

export function addToReadList(filmObject: IfilmObject): Action_Set_List {
  return { type: ADD_TO_READ_LIST, filmObject };
}

export function removeToReadList(filmObject: IfilmObject): Action_Set_List {
  return { type: REMOVE_TO_READ_LIST, filmObject };
}

export function formAuthorizationOpen(): Action {
  return { type: FORM_AUTHORIZATION_OPEN }
}

export function formAuthorizationClose(): Action {
  return { type: FORM_AUTHORIZATION_CLOSE }
}

export function sortFavoriteList(sortedList: Array<IfilmObject>): Action {
  return { type: SORT_FAVORITE_LIST, sortedList }
}

export function sortToReadList(sortedList: Array<IfilmObject>): Action {
  return { type: SORT_TO_READ_LIST, sortedList }
}






