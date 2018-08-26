import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <div className="jumbotron">
    <h1 className="">¿Como te sientes hoy?</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
