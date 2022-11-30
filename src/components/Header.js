import React from 'react';
import '../styles/Header.scss';
import GavelIcon from '@mui/icons-material/Gavel';

function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<ul>
					<li>
						<a id="gavel" href="/">
							<GavelIcon />
						</a>
					</li>
					<li>
						<a href="/vocabulary">Vocabulary</a>
					</li>
					<li>
						<a href="/judge">Search Judge</a>
					</li>
					<li>
						<a href="/judgeCompare">Compare Judges</a>
					</li>
					<li>
						<a href="/bail">Bail</a>
					</li>
					<li>
						<a href="/demographics">Demographics</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
