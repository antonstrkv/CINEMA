import { useSelector, useDispatch } from 'react-redux';
import { logOut, formAuthorizationOpen } from "src/redux/actions";
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { IisAuthorized } from 'src/types/types';

const CreateHeader: FC = () => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector<IisAuthorized>(state => state.isAuthorized);


	return (
		<header>
			<div className="header">
				<div className="menubar">
					<ul className="menu">
						<NavLink className="menu-item" to="/">Home</NavLink>
						<li className="inProgress" >Series</li>
						<li className="inProgress" >Films rating</li>
						<li className="inProgress" >Contacts</li>
						{(isAuthorized) ?
							<button className="Logout_btn" onClick={() => { dispatch(logOut()) }}>Sign Out</button>
							:
							<button className="Login_btn" onClick={() => { dispatch(formAuthorizationOpen()) }}>Sign In</button>}
					</ul>
				</div>

			</div>
		</header>
	);
}

export { CreateHeader };

