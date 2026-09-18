import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="hero">
      <p className="subtitle">Каталог туристических маршрутов</p>
      <h1>Найдите маршрут для следующего путешествия</h1>
      <p className="hero__text">
        Выбирайте прогулки по городам, походы выходного дня и более сложные
        маршруты.
      </p>
      <Link className="button" to="/routes">
        Смотреть маршруты
      </Link>
    </section>
  )
}

export default HomePage
