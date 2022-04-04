import logo from "../../assets/logo_white.svg";
import "./Header.scss";

const Header = ({ authToken, minimal }) => {
	return (
		<header className="header">
			<div className="logo">
				<img src={logo} className="logo__img" alt="logo"></img>
				<span className="logo__text">dinder</span>
			</div>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">Home</li>
					<li className="nav__item">About</li>
					<li className="nav__item">Dashboard</li>
					{!authToken && (
						<li>
							<button className="button--primary">Log in</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;