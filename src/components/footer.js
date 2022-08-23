import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

export const Footer = () => {
  return (
    <div className="h3-firma-position">
        <div className='h3-firma'>
            <h3 className='footer-icon'>Designed by AustinDev 2022.</h3>
            <div className='footer-icon-container'>
                <a href="https://www.instagram.com/austindev_/"  target='_blank' className='footer-icon'> <GrInstagram /> </a>
                <a href="https://twitter.com/AustinDev_?t=dtEoxgzUPBW3-8Ot8G1LDA&s=09"  target='_blank' className='footer-icon'> <GrTwitter /> </a>
                <a href="https://www.linkedin.com/in/agust%C3%ADn-martearena-5a6820235/"    target='_blank' className='footer-icon'> <GrLinkedin /> </a>
                <a href="https://github.com/AustinEze/" className='footer-icon'> <GrGithub /> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;