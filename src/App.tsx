import { Routes, Route } from 'react-router-dom';
import { Layout } from "src/components-layout/Layout";
import { MainPage } from "src/pages/main-page/Main-Page";
import { Notfoundpage } from "src/pages/NotFound-Page";
import { FilmPage } from "src/pages/FilmCard-Page";
import { SearchPage } from "src/pages/search-page/Search-Page";
import ScrollToTop from "src/components-layout/ScrollToTop";
import { FC } from 'react';

const App: FC = () => {
	return (
		<ScrollToTop>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='film/:filmId' element={<FilmPage />} />
					<Route path='search' element={<SearchPage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</ScrollToTop>
	)
}

export default App;
