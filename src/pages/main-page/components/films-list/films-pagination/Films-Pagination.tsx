import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setNewCurrentPage } from "src/redux/actions";



const CreatePagination = ({ FilmsList }: any) => {
	const dispatch = useDispatch();
	const currentPage: any = useSelector<{ currentPage: number }>(state => state.currentPage);
	const countPages: number = Math.ceil(FilmsList.length / 10);

	useEffect(() => {
		const previousButton: any = document.querySelector('.Previous-page_btn');
		const nextButton: any = document.querySelector('.Next-page_btn');
		if (!FilmsList[0] || (currentPage === 1 && countPages === 1)) {
			previousButton.disabled = true;
			nextButton.disabled = true;
		} else if (currentPage === 1) {
			nextButton.disabled = false;
			previousButton.disabled = true;
		} else if (currentPage === countPages) {
			previousButton.disabled = false;
			nextButton.disabled = true;
		} else {
			previousButton.disabled = false;
			nextButton.disabled = false
		}
	})


	return (
		<div className="pagination-block">
			<h1>New films</h1>
			<div className="pagination-btns">
				<button className="Previous-page_btn" onClick={() => { dispatch(setNewCurrentPage(currentPage - 1)) }}>&#8656;</button>
				<button className="Next-page_btn" onClick={() => { dispatch(setNewCurrentPage(currentPage + 1)) }}>&#8658;</button>
			</div>
			<hr />
			{(FilmsList.length) ? <small>{currentPage} of {countPages}</small> : <small>Films not found</small>}
		</div>
	);
}

export { CreatePagination };