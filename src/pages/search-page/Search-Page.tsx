/* eslint-disable react-hooks/exhaustive-deps */
import { CHECKBOXES } from "src/constants/Constants";
import { useState, useCallback, FC } from "react";
import { CreateCheckbox } from "src/pages/main-page/components/sidebar/sidebar-elements/Checkboxes";
import { sortSearchPage } from "src/utilities/sortFilms";
import { CreateFilmElement } from "src/pages/main-page/components/films-list/film-element/Film-Element";
import { Link, NavLink } from "react-router-dom";



const SearchPage: FC = () => {
	const [activeGeners, setActiveGeners] = useState<Array<number | undefined>>([]);
	const [rating, setRating] = useState<string>('High');
	const [popularity, setPopularity] = useState<string>('Popularity');
	const [SORTED_FILMS, set_SORTED_FILMS] = useState<Array<object>>([]);
	const [currentFilmNumber, setCurrentFilmNumber] = useState<number>(0);
	const currentFilm: any = SORTED_FILMS[currentFilmNumber];


	const setNewActiveGeners = useCallback((activeGener: number): void => {
		let newGenersList = [...activeGeners];
		if (!newGenersList.includes(activeGener)) {
			newGenersList.push(activeGener);
			setActiveGeners(newGenersList);
		} else if (newGenersList.includes(activeGener)) {
			newGenersList.splice(newGenersList.indexOf(activeGener, 0), 1)
			setActiveGeners(newGenersList);
		}
	}, [activeGeners])


	return (
		<div className="site_content">

			<div className="sidebar_container">

				<div className="sidebar">
				<NavLink className="menu-item-search-active" to="/">&#128269;</NavLink>
					<div className="sidebar_header">
						<h2>Filters:</h2>
						<hr />
					</div>

					<div className="select-header"><small>Film rating:</small></div>
					<select id="Select-Popularity" className="select-item" onChange={(e) => { setRating(e.target.value) }}>
						<option value="High">High</option>
						<option value="Low">Low</option>
					</select>


					<div className="select-header"><small>Film popularity:</small></div>
					<select id="Select-Popularity" className="select-item" onChange={(e) => { setPopularity(e.target.value) }}>
						<option value="Popularity">Popular</option>
						<option value="Not-popularity">Not popular</option>
					</select>


					{CHECKBOXES.map((item, index) => <CreateCheckbox item={item} index={index} setNewActiveGeners={setNewActiveGeners}
						key={index} />)}


					<button className="sort-btn"
						onClick={() => set_SORTED_FILMS(sortSearchPage(activeGeners, rating, popularity))}>Find</button>


					<div className="search-btns">
						{(currentFilm && !(SORTED_FILMS.length === currentFilmNumber + 1)) ?
							<button className="Previous-search_btn" onClick={() => { setCurrentFilmNumber(currentFilmNumber + 1) }}>Next</button>
							:
							<button className="Previous-search_btn" disabled>Next</button>}
						{(currentFilm) ?
							<Link to={`/film/${currentFilm.id}`}>
								<button className="Next-search_btn" >Read more</button>
							</Link>
							:
							<button className="Next-search_btn" disabled>Read more</button>}
					</div>
				</div>
			</div>


			<div className="content-search">
				<div className="films_block-serch">
					{(currentFilm) ? <CreateFilmElement item={currentFilm} index={currentFilmNumber} key={currentFilmNumber} /> : ''}
				</div>
			</div>
		</div>
	)
}

export { SearchPage };