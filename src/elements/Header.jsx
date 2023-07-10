import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/auth'>auth</NavLink>
        <NavLink to='/myphones'>My Phones</NavLink>
        <NavLink to='/allphones'>All Phones</NavLink>
    </nav>
  )
}

export default Header