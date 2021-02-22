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

    </div>
  )
}
