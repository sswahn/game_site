import { config } from '../config'

export default function Footer() {

  return (
    <footer>
      <div>
        <a href={config.url.about}>About</a>
        <a href={config.url.contact}>Contact</a>
        <a href={config.url.facebook}>Facebook</a>
        <a href={config.url.twitter}>Twitter</a>
      </div>
      <div>
        <p>&copy; 2021, All rights reserved.</p>
      </div>
    </footer>
  )
}