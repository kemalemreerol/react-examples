import React from 'react'

function Contact() {
  return (
    <div>
        <div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
  <div className="w3-row">
    <div className="w3-col m5">
      <div className="w3-padding-16"><span className="w3-xlarge w3-border-teal w3-bottombar">Bizimle İletişime Geç</span></div>
      <h3>Adres</h3>
      <p><i className="fa fa-map-marker w3-text-teal w3-xlarge" />&nbsp;&nbsp;Chicago, US</p>
      <p><i className="fa fa-phone w3-text-teal w3-xlarge" />&nbsp;&nbsp;+00 1515151515</p>
      <p><i className="fa fa-envelope-o w3-text-teal w3-xlarge" />&nbsp;&nbsp;test@test.com</p>
      <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Facebook"><i className="fa fa-facebook" /></a>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Twitter"><i className="fa fa-twitter" /></a>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-google-plus" /></a>
  <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-instagram" /></a>
  <a className="w3-button w3-large w3-teal w3-hide-small" href="javascript:void(0)" title="Linkedin"><i className="fa fa-linkedin" /></a>
    </div>
    <div className="w3-col m7">
      <form className="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">
        <div className="w3-section">      
          <label>İsim</label>
          <input className="w3-input" type="text" name="Name" required />
        </div>
        <div className="w3-section">      
          <label>Email</label>
          <input className="w3-input" type="text" name="Email" required />
        </div>
        <div className="w3-section">      
          <label>Mesaj</label>
          <input className="w3-input" type="text" name="Message" required />
        </div>  
        {/* <input className="w3-check" type="checkbox" defaultChecked name="Like" />
        <label>I Like it!</label> */}
        <button type="submit" className="w3-button w3-right w3-theme">Gönder</button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact