import SlideShow from './SlideShow'
import Products from './Products'
import { data } from '../fake-data'

export default function Landing() {
  return (
    <div className="landing">
      {/* <SlideShow data={data} /> */}
      <Products data={data} />
    </div>
  )
}
