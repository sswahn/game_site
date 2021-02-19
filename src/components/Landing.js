import { fake_data } from '../fake-data'
import Store from '../utilities/store'

export default function Landing() {
  const store = Store()

  store.create({item: 'test item'})
  //store.create({item2: '2test 2item'})
  //store.remove({item3: '3test 3item'})
  //store.remove('item')
  

  return (
    <div className="landing">
      <div className="games">
        <div>
          <a href={fake_data.game1.url}>
            <img src={fake_data.game1.title_art} alt={fake_data.game1.title} />
          </a>
        </div>
        <div>
          <div className="heading">
            <div>
              <h2>{fake_data.game1.title}</h2>
            </div>
            <div>
              <span>{fake_data.game1.price}</span>
            </div>
          </div>
          <div className="meta">
            <div>Reviews: {fake_data.game1.reviews}</div>
            <div>Rating: {fake_data.game1.rating}</div>
          </div>

          <div className="genre">
            {fake_data.game1.genre.map(genre => <a href={`/${genre}`}>#{genre}</a>)}
          </div>
        </div>
      </div>
    </div>
  )
}
