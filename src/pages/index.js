import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const IndexPage = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-4 jumboTitle">¿Como te sientes hoy?</h1>
      <br></br>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      
        <br></br>
        <a className="btn btn-primary btn-lg" href="/page2" role="button">Preocupado</a>
        <a className="btn btn-primary btn-lg" href="/page2" role="button">Animado</a>
        <a className="btn btn-primary btn-lg" href="/page2" role="button">Chistoso</a>
      </div>
  </div>    

)

export default IndexPage
