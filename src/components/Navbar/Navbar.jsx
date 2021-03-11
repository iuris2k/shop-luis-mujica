import CartWidget from "../Cardwidget";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="/">
				E-Commerce
			</a>

			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="/">
						Home
					</a>
					<a className="nav-item nav-link" href="/">
						Courses
					</a>
					<a className="nav-item nav-link" href="/">
						Consulting
					</a>
				</div>
			</div>

			<CartWidget />

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
		</nav>
	);
};

export default Navbar;
