import React from "react"
import "../styles/custom.css"
import { Link } from "gatsby"
import Helmet from "react-helmet"
export default () => ( <>
    <Helmet>
      <title>Taylor's Tidy Trees</title>
      <link to="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    </Helmet>



    <header>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom" style="border-bottom:1px solid black;">
      <div className="container">

        <Link className="navbar-brand" to="./home.html">
          <img src ="../photos/lin.png" className="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="../home.html">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about.html">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="gallery.html">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="bananas.html">Bananas?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contactme.html">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav></header>
    <main>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom" style="border-bottom:1px solid black;">
      <div className="container">

        <a className="navbar-brand" to="./home.html">
          <img src ="../photos/lin.png" className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" to="../home.html">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="gallery.html">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="bananas.html">Bananas?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="contactme.html">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </main>
  </>
)
