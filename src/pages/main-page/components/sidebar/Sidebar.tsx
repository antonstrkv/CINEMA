import { memo } from "react";
import { useSelector } from "react-redux";
import { IisAuthorized, ISidebarProps } from "src/types/types";
import { CreateSelectFavoriteToRead } from "./sidebar-elements/Select-Favorite-toRead";
import { CreateSelectPopularityElement } from "./sidebar-elements/Select-Popularity";
import { CreateSelectYearElement } from "./sidebar-elements/Select-Year";
import { CreateCheckbox } from "./sidebar-elements/Checkboxes";
import { CHECKBOXES } from "src/constants/Constants";
import { CreateDefoultSidebars } from "./sidebar-elements/Defoult-Sidebars";
import { NavLink } from "react-router-dom";



const CreateSidebarInner = (props: ISidebarProps) => {
	const { set_SORT_TYPE, setCurrentYear, setNewActiveGeners, set_LIST_TO_SHOW, resetFilters } = props;
	const isAuthorized = useSelector<IisAuthorized>(state => state.isAuthorized);


	return (
		<div className="sidebar_container">

			<div className="sidebar">
			<NavLink className="menu-item-search" to="/search">&#128269;</NavLink>
				<div className="sidebar_header">
					<h2>Filters:</h2>
					<hr />
				</div>

				<button className="clear-filters_btn" onClick={() => resetFilters()}>Reset filters</button>

				{(isAuthorized) ? <CreateSelectFavoriteToRead set_LIST_TO_SHOW={set_LIST_TO_SHOW} /> : ''}

				<CreateSelectPopularityElement set_SORT_TYPE={set_SORT_TYPE} />

				<CreateSelectYearElement setCurrentYear={setCurrentYear} />

				{CHECKBOXES.map((item, index) => <CreateCheckbox item={item} index={index}
					key={index} setNewActiveGeners={setNewActiveGeners} />)}

			</div>

			<CreateDefoultSidebars />

		</div>
	);
}


export const CreateSidebar = memo(CreateSidebarInner);