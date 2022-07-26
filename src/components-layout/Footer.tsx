import { FC } from "react";

const CreateFooter: FC = () => {
	return (
		<div className="footer">
			<div className="footer-social default-container">
				<p>
					<a href="index.html"> Home</a> |
					<a href="films.html"> Search</a> |
					<a href="#"> Series</a> |
					<a href="rating.html"> Films rating</a> |
					<a href="contact.html"> Contacts</a>
				</p>
				<p>Follow us via social media:</p>
				<a href="#">
					<img src="assets/img/icons/youtube.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/facebook.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/instagramm.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/vk.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/telegramm.svg" alt="social" />
				</a>
			</div>
		</div>

	);
}

export { CreateFooter };