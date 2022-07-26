import { IfilmObject } from "../types/types";

export function saveStorageFavoriteFilms(arrFilms: Array<IfilmObject>): void {
	let favoriteFilms: string = JSON.stringify(arrFilms);
	localStorage.setItem('favoriteFilms', favoriteFilms);
}

export function saveStorageToReadFilms(arrFilms: Array<IfilmObject>): void {
	let toReadFilms: string = JSON.stringify(arrFilms);
	localStorage.setItem('toReadFilms', toReadFilms);
}