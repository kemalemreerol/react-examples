import React from 'react'


function Footer() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
  <h4>Bizi Takip Edin</h4>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Facebook"><i className="fa fa-facebook" /></a>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Twitter"><i className="fa fa-twitter" /></a>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-google-plus" /></a>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-instagram" /></a>
  <a className="w3-button w3-large w3-teal w3-hide-small" href="javascript:void(0)" title="Linkedin"><i className="fa fa-linkedin" /></a>

  <div style={{position: 'relative', bottom: '100px', zIndex: 1}} className="w3-tooltip w3-right">
    <span className="w3-text w3-padding w3-teal w3-hide-small">Go To Top</span>   
    <a className="w3-button w3-theme" href="#myPage"><span className="w3-xlarge">
        <i className="fa fa-chevron-circle-up" /></span></a>
  </div>
</footer>

  </div>
  )
}

export default Footer