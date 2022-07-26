import { useDispatch } from "react-redux";
import {
	sortPopularityDescendingList,
	sortPopularityAscendingList,
	sortRatingDescendingList,
	sortRatingAscendingList,
	setNewCurrentPage,
} from "src/redux/actions";
import { ChangeEvent, memo } from "react";


const CreateSelectPopularityElementInner = ({ set_SORT_TYPE }: any) => {
	const dispatch = useDispatch();

	const doSort = (e: ChangeEvent<HTMLSelectElement>): void => {
		switch (e.target.value) {
			case "Popularity-Descending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortPopularityDescendingList());
				break;
			case "Popularity-Ascending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortPopularityAscendingList());
				break;
			case "Rating-Descending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortRatingDescendingList());
				break;
			case "Rating-Ascending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortRatingAscendingList());
				break;
			default: alert("This does not work")
		}
	}


	return (
		<>
			<div className="select-header"><small>Sort by:</small></div>

			<select id="Select-Popularity" className="select-item" onChange={doSort}>
				<option value="Popularity-Descending">Popular descending</option>
				<option value="Popularity-Ascending">Popular ascending</option>
				<option value="Rating-Descending">Rating descending</option>
				<option value="Rating-Ascending">Rating ascending</option>
			</select>
		</>
	);
}

export  const CreateSelectPopularityElement = memo(CreateSelectPopularityElementInner);