import { fake_data } from '../fake-data'

export default function Landing() {

  return (
    <div className="container">
      <a href={fake_data.game1.url} className="games">
        <span>some game</span>
      </a>
      <a href={fake_data.game2.url} className="games">
        <span>another game</span>
      </a>
    </div>
  )
}
