import React from 'react'

function Navbar() {
  return (
    <div><div className="w3-top">
    <div className="w3-bar w3-theme-d2 w3-left-align">
      <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2" to="javascript:void(0);" onclick="openNav()"><i className="fa fa-bars" /></a>
      <a href="/" className="w3-bar-item w3-button w3-teal"><i className="fa fa-home w3-margin-right" />Home</a>
      <a href="/products" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Products</a>
      <a href="/contact" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Contact</a>
      {/* <Link to="#pricing" className="w3-bar-item w3-button w3-hide-small w3-hover-white">References</Link>
      <Link to="#pricing" className="w3-bar-item w3-button w3-hide-small w3-hover-white">About</Link>
      
      <Link to="#pricing" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Card</Link> */}
      
      {/* <Link to="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal" title="Search"><i className="fa fa-search" /></Link> */}
    </div>
  </div></div>
  )
}

export default Navbar
