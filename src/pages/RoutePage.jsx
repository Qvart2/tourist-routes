import { useParams } from 'react-router-dom'

function RoutePage() {
  const { routeId } = useParams()

  return (
    <section className="page-card">
      <p className="subtitle">Маршрут №{routeId}</p>
      <h1>Информация о маршруте</h1>
      <p>
        На этой странице появятся фотография, город, длительность, сложность и
        описание выбранного маршрута.
      </p>
    </section>
  )
}

export default RoutePage
