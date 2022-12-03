import React from 'react'
import '../Style/Navbar.css';

function Navbar() {
  return (
    <>
      <section id="header">
        <div class="container">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <div class="logo col-sm-3">
                <img src="../assets/iamges/logosvgproper.svg" className='img' />
              </div>          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link how" href="#">How it works</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link hows" href="#">Agency</a>
                  </li>
                  <li class="nav-item">
                    <a  href='#'class="nav-link howss">Contact us</a>
                  </li>
                  <li class="nav-item">
                    <a href='#' class="nav-link howssss">Blog</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <button class="btn login" type="submit">Log in</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Navbar