import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorRoute() {
  let routingError = useRouteError()

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-danger">{routingError.status} - {routingError.data}</h2>
      <p className="text-center">Oops! Something went wrong.</p>
      <p className="text-center">Don't worry, let's get you back on track.</p>
      <Link to="/" className="btn btn-primary mt-3">Go to Home Page</Link>
    </div>
  )
}

export default ErrorRoute
