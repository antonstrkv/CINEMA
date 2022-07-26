import { FC } from "react"


const CreateDefoultSidebars: FC = () => {
	return (
		<>
			<div className="sidebar defoult">
				<h2>News</h2>
				<hr />
				<span>01.07.2022</span>
				<p>We launched an advanced search</p>
				<a href="show.html">read</a>
			</div>


			<div className="sidebar defoult">
				<h2>Movie rating</h2>
				<hr />
				<ul>
					<li><a href="show.html">Interstellar</a><span className="rating_sidebar">8.1</span></li>
					<li><a href="show.html">Matrix</a><span className="rating_sidebar">8.0</span></li>
					<li><a href="show.html">Crazy Max</a><span className="rating_sidebar">7.5</span></li>
					<li><a href="show.html">Cloud Atlas</a><span className="rating_sidebar">7.4</span></li>
				</ul>
			</div>
		</>
	)
}

export { CreateDefoultSidebars };