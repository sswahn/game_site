import { config } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href={config.url.about}>About</a>
        <a href={config.url.contact}>Contact</a>
        <a href={config.url.facebook} target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
          {/* <span>company name on facbook</span> */}
        </a>
        <a href={config.url.twitter} target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
          {/* <span>@company name</span> */}
        </a>
        <div>
          <a href="" target="_blank">Privacy Policy</a>
          <a href="" target="_blank">Legal</a>
        {/* combine the following into "legal": */}
          <a href="">Subscriber Agreement</a>
          <a href="">Refunds</a>
        </div>
        <p>&copy; 2021, All rights reserved.</p>
      </div>
    </footer>
  )
}