import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const amount  = useSelector(state =>  state.amount)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-bg-dark" href="/">State Bank of Nikhil</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <div className="d-flex" >
        <button className="btn btn-primary" type="submit" disabled={true}>Your balance : {amount}</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar