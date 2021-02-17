import { fake_data } from '../fake-data'
import Store from '../store'

export default function Landing() {
  const store = Store()

  store.create({item: 'test item'})
  store.create({item2: '2test 2item'})
  store.create({item3: '3test 3item'})

  
  store.remove('item')
  

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
