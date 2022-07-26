import { useDispatch } from "react-redux";
import { setNewCurrentPage } from "src/redux/actions";
import { ChangeEvent, memo } from "react";
import { IshowList } from "src/types/types";

const SHOW_LIST: IshowList = {
	ALL_LIST: "All",
	TO_READ_LIST: "To-Read",
	FAVORITE_LIST: "Favorite",
}

const CreateSelectFavoriteToReadInner = ({ set_LIST_TO_SHOW }: any) => {
	const dispatch = useDispatch();

	const doSort = (e: ChangeEvent<HTMLSelectElement>): void => {
		switch (e.target.value) {
			case SHOW_LIST.ALL_LIST:
				dispatch(setNewCurrentPage(1));
				set_LIST_TO_SHOW(e.target.value);
				break;
			case SHOW_LIST.TO_READ_LIST:
				dispatch(setNewCurrentPage(1));
				set_LIST_TO_SHOW(e.target.value);
				break;
			case SHOW_LIST.FAVORITE_LIST:
				dispatch(setNewCurrentPage(1));
				set_LIST_TO_SHOW(e.target.value);
				break;
			default: alert("This does not work")
		}
	}

	return (
		<>
			<div className="select-header"><small>Lists:</small></div>

			<select id="Select-FavoriteToRead" className="select-item" onChange={doSort}>
				<option value={SHOW_LIST.ALL_LIST}>All</option>
				<option value={SHOW_LIST.TO_READ_LIST}>Watch later</option>
				<option value={SHOW_LIST.FAVORITE_LIST}>Favorites</option>
			</select>
		</>
	)
}

export const CreateSelectFavoriteToRead = memo(CreateSelectFavoriteToReadInner);