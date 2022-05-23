import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth'

export const Navbar = () => {

	const dispatch = useDispatch();
	const { username } = useSelector( state => state.auth );

	const handleLogout = () => {

		dispatch( startLogout() );
	}

	return (
		<>
			<nav className="navbar bg-dark">
			  <div className="container-fluid">
			    <a className="navbar-brand">Navbar</a>

			    <span className="navbar-text">
					{ username }
				</span>

			    <form className="d-flex" role="search">
			      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
			      <button className="btn btn-outline-success" type="submit">Search</button>
			    </form>

			    <button className="btn btn-outline-danger" onClick={ handleLogout } >
					Salir
				</button>

			  </div>
			</nav>
		</>
	)
}

