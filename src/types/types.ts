
export interface IisAuthorized {
	isAuthorized: boolean,
}

export type FormAuthorizationStatus = {
	isFormAuthorizationOpen: boolean,
}

export interface IFilmsList {
	FILMS_ALL?: IfilmObject,
	FAVORITE_LIST?: IfilmObject,
	TO_READ_LIST?: IfilmObject,
	FilmsList?: IfilmObject | undefined,
}


export interface IfilmObject {
	adult: boolean,
	backdrop_path: string,
	genre_ids: Array<number>,
	id: number,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}


export interface ICheckboxObject {
	id: number,
	name: string
}


export type Action = {
	readonly type: string,
	readonly sortedList?: Array<IfilmObject>,
	activeGener?: number;
}

export type Action_Set_Page = {
	readonly type: string,
	readonly newCurrentPage: number,
}

export type Action_Set_List = {
	readonly type: string,
	readonly filmObject: IfilmObject,
	readonly sortedList?: Array<IfilmObject>,
}

export type FilmItem = {
	index: number,
	item: IfilmObject,
}

export interface CheckboxItem {
	index: number,
	item: ICheckboxObject,
}

export interface ICheckbocSearch extends CheckboxItem {
	setNewActiveGeners: (activeGener: number) => void,
}



export type FilmsListProps = {
	listToShow: string,
	allFilmsList: Array<object>,
	currentYear: string,
	activeGeners: Array<number | undefined>,
	sortType: Action,
}

export interface IshowList {
	readonly ALL_LIST: string,
	readonly TO_READ_LIST: string,
	readonly FAVORITE_LIST: string,
}


export interface IinitialState {
	isAuthorized: boolean,
	FAVORITE_LIST: Array<IfilmObject | undefined>,
	TO_READ_LIST: Array<IfilmObject | undefined>,
	isFormAuthorizationOpen: boolean,
	currentPage: number,
}

export interface ISidebarProps {
	set_SORT_TYPE: (newSortType: Action) => void,
	setCurrentYear: (newCurrentYear: string) => void,
	setNewActiveGeners: (activeGener: number) => void,
	set_LIST_TO_SHOW: (listToShow: string) => void,
	resetFilters: () => void,
}

