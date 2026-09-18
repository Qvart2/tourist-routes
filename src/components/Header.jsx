import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <NavLink className="logo" to="/">
          Пора в путь
        </NavLink>

        <nav className="navigation">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/routes">Маршруты</NavLink>
          <NavLink to="/add-route">Добавить маршрут</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
