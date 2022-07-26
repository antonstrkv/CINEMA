import { useDispatch, } from "react-redux";
import { setNewCurrentPage } from "src/redux/actions";
import { memo, ChangeEvent } from "react";


const CreateSelectYearElementInner = ({ setCurrentYear }: any) => {
	const dispatch = useDispatch();

	const doSort = (e: ChangeEvent<HTMLSelectElement>): void => {
		setCurrentYear(e.target.value);
		dispatch(setNewCurrentPage(1));
	}


	return (
		<>
			<div className="select-header"><small>Release year:</small></div>

			<select id="Select-Years" className="select-item" onChange={doSort}>
				<option value="2020">2020</option>
				<option value="2019">2019</option>
				<option value="2018">2018</option>
				<option value="2017">2017</option>
			</select>
		</>
	);
}

export const CreateSelectYearElement = memo(CreateSelectYearElementInner);