import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CreateHeader } from './Header';
import { CreateFooter } from './Footer';
import { CreateAuthorizationForm } from "./Authorization"
import { FC } from 'react';
import { FormAuthorizationStatus } from 'src/types/types';

const Layout: FC = () => {
	const formAuthorizationStatus = useSelector<FormAuthorizationStatus>(state => state.isFormAuthorizationOpen);

	return (
		<>
			{(formAuthorizationStatus) ? <CreateAuthorizationForm /> : ''}
			<div className="main">
				<CreateHeader />
				<Outlet />
			</div>
			<CreateFooter />
		</>
	)
}

export { Layout };