import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { removeToReadList, removeFavoriteList, addFavoriteList, addToReadList, formAuthorizationOpen } from 'src/redux/actions';
import { FilmItem, IisAuthorized, IFilmsList } from 'src/types/types';

const CreateFilmElementInner = ({ index, item }: FilmItem) => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector<IisAuthorized>(state => state.isAuthorized);
	const favotiteFilmsList = useSelector<IFilmsList>(state => state.FAVORITE_LIST);
	const toReadFilmsList = useSelector<IFilmsList>(state => state.TO_READ_LIST);
	const isSavedFavorite: boolean = JSON.stringify(favotiteFilmsList).includes(JSON.stringify(item)) ?? false;
	const isSavedToRead: boolean = JSON.stringify(toReadFilmsList).includes(JSON.stringify(item)) ?? false;


	const handleClickToRead = (): void => {
		if (isSavedToRead) {
			dispatch(removeToReadList(item))
		} else {
			dispatch(addToReadList(item))
		}
	}

	const handleClickFavorite = (): void => {
		if (isSavedFavorite) {
			dispatch(removeFavoriteList(item))
		} else {
			dispatch(addFavoriteList(item))
		}
	}

	return (
		<div key={index} className="card">
			<div className="card-header">
				<img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="rover" />
			</div>
			<div className="card-body">
				<div className="card-title">
					<h4>
						{item.title}
					</h4>
				</div>
				<span>
					{`${item.overview.substring(0, 150)}...`}
				</span>
				<div className="user">
					<button className={(isSavedToRead) ? 'to-read__btn to-read__btn--active' : 'to-read__btn'}
						onClick={() => { (isAuthorized) ? handleClickToRead() : dispatch(formAuthorizationOpen()) }}>
					</button>
					<button className={(isSavedFavorite) ? 'favorite__btn favorite__btn--active' : 'favorite__btn'}
						onClick={() => { (isAuthorized) ? handleClickFavorite() : dispatch(formAuthorizationOpen()) }}>
					</button>
					<div className="film-info">
						<h5>Rating: {item.vote_average}</h5>
						<small>{item.release_date}</small>
					</div>
				</div>
			</div>
			<Link to={`/film/${item.id}`}>
				<button className="film-info_btn">Read more</button>
			</Link>
		</div>
	);
}

export const CreateFilmElement = memo(CreateFilmElementInner);