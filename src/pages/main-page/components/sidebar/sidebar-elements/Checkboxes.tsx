import { useDispatch } from "react-redux";
import { setNewCurrentPage } from "src/redux/actions";
import { memo, ChangeEvent } from "react";
import { ICheckbocSearch } from "src/types/types";




const CreateCheckboxInner = ({ index, item, setNewActiveGeners }: ICheckbocSearch) => {
	const dispatch = useDispatch();

	const onSelected = (e: ChangeEvent<HTMLInputElement>): void => {
		setNewActiveGeners(Number(e.target.value));
		dispatch(setNewCurrentPage(1));
	}

	return (
		<div key={index} className="checkbox">
			<label className="custom-checkbox">
				<input type="checkbox" className="checkbox_input" name="color-1" value={item.id} onChange={onSelected} />
				<span>{item.name}</span>
			</label>
		</div>
	)
}

export const CreateCheckbox = memo(CreateCheckboxInner);