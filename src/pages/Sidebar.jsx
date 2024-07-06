import React from 'react'

const Sidebar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-light ">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="create-check">Create Check</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/my-checks">My Checks</a>
        </li>
        

        
        
      </ul>
    </div>
  </div>
</nav>
    </>

  )
}

export default Sidebar