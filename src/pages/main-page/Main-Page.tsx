/* eslint-disable react-hooks/exhaustive-deps */
import { useState, FC, useCallback } from "react";
import { CreateFilmsList } from "./components/films-list/Films-List";
import { CreateSidebar } from "./components/sidebar/Sidebar";
import { FILMS_ALL } from "src/constants/Constants";
import { sortPopularityDescendingList } from "src/redux/actions";
import { Action } from "src/types/types";


const MainPage: FC = () => {
	const [SORT_TYPE, set_SORT_TYPE] = useState<Action>(sortPopularityDescendingList());
	const [LIST_TO_SHOW, set_LIST_TO_SHOW] = useState<string>("All");
	const [FILMS, set_FILMS] = useState<Array<object>>(FILMS_ALL);
	const [currentYear, setCurrentYear] = useState<string>("2020");
	const [activeGeners, setActiveGeners] = useState<Array<number | undefined>>([]);


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


	const resetFilters = useCallback((): void => {
		set_LIST_TO_SHOW("All");
		set_FILMS(FILMS_ALL);
		setCurrentYear("2020");
		setActiveGeners([]);
		const SelectYearsElement: any = document.getElementById('Select-Years');
		SelectYearsElement.selectedIndex = 0;
		const SelectPopularityElement: any = document.getElementById('Select-Popularity');
		SelectPopularityElement.selectedIndex = 0;
		const SelectListElement: any = document.getElementById('Select-FavoriteToRead');
		SelectListElement.selectedIndex = 0;
		const Checkboxes: any = document.querySelectorAll('.checkbox_input');
		Checkboxes.forEach((item: { checked: boolean; }) => item.checked = false);
	}, []);


	return (
		<div className="site_content">
				<CreateSidebar set_SORT_TYPE={set_SORT_TYPE} setCurrentYear={setCurrentYear} setNewActiveGeners={setNewActiveGeners} 
				set_LIST_TO_SHOW={set_LIST_TO_SHOW} resetFilters={resetFilters} />

				<CreateFilmsList listToShow={LIST_TO_SHOW} allFilmsList={FILMS}
					currentYear={currentYear} activeGeners={activeGeners} sortType={SORT_TYPE} />
		</div>
	)
}

export { MainPage };