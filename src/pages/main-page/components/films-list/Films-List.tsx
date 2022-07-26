import { CreateFilmElement } from "./film-element/Film-Element";
import { CreatePagination } from "./films-pagination/Films-Pagination";
import { useSelector } from 'react-redux';
import { sortSelectedList } from "src/utilities/sortFilms";
import { FilmsListProps, IFilmsList, IfilmObject } from "src/types/types";



const CreateFilmsList = ({ listToShow, allFilmsList, currentYear, activeGeners, sortType }: FilmsListProps) => {

	const currentPage: any = useSelector<{ currentPage: number }>(state => state.currentPage);
	const favotiteFilmsList = useSelector<IFilmsList>(state => state.FAVORITE_LIST);
	const toReadFilmsList = useSelector<IFilmsList>(state => state.TO_READ_LIST);
	let FilmsList: any = [];



	switch (listToShow) {
		case "All":
			FilmsList = sortSelectedList(allFilmsList, activeGeners, currentYear, sortType);
			break;
		case "To-Read":
			FilmsList = sortSelectedList(toReadFilmsList, activeGeners, currentYear, sortType);
			break;
		case "Favorite":
			FilmsList = sortSelectedList(favotiteFilmsList, activeGeners, currentYear, sortType);
			break;
		default: alert("Error");
	}


	return (
		<div className="content">

			<CreatePagination FilmsList={FilmsList} />

			<div className="films_block">
				{FilmsList.slice(10 * (currentPage - 1), 10 * currentPage).map((item: IfilmObject, index: number) =>
					<CreateFilmElement item={item} index={index} key={index} />)}
			</div>
		</div>
	);
}

export { CreateFilmsList };


