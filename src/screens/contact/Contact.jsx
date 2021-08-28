import React from 'react'
import './contact.css'
import {links} from '../../helpers/links'

function Contact() {
  function createLinks() {
    return links.map((e, idx) => {
      return (
        <div key={idx}>
          <a href={e.ref} className="contact__links">{e.name}</a>
        </div>
      )
    })
  }
  return (
    <div className="contact__container" id="contact">
      <div>
        <p>Ruby jasmin</p>
        <a href="tel:+57-313-2259973">+57-313-2259973</a>
        <p>rubisam24@gmail.com</p>
      </div>
      <div>
      {createLinks()}
      </div>
    </div>
  )
}

export default Contact
