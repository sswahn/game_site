import { useReducer } from 'react'
import { reducer } from '../reducer'
import { config } from '../config'

export default function Sidebar() {
  const initial_state = { display: 'default' }
  const [ state, dispatch ] = useReducer(reducer, initial_state)

  return (
    <div className="sidebar">
      <header>
        <h1>
          <a href={config.url.home} rel="home">
            <img src="" alt="company logo" />
          </a>
        </h1>
      </header>
      <nav>
        <div>
          <p>Games by genre:</p>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'action'})}>Action</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'adventure'})}>Adventure</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'rpg'})}>RPG</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'strategy'})}>Strategy</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'horror'})}>Horror</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'survival'})}>Survival</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'platformer'})}>Platformer</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'sports'})}>Sports</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'racing'})}>Racing</a>
          <a href={''} onClick={() => dispatch({ type: 'genre', payload: 'casual'})}>Casual</a>
        </div>
        <div>
          <p>Categories:</p>
          <a href="">Featured</a>
          <a href="">New Releases</a>
          <a href="">Top Sellers</a>
          <a href="">Recommended</a>
          <a href="">Mobile</a>
        </div>
      </nav>
      <footer>
        <nav>
          <a href={config.url.about}>About</a> &nbsp;
          <a href={config.url.contact}>Contact</a> &nbsp;
          <a href={config.url.facebook}>Facebook</a> &nbsp;
          <a href={config.url.twitter}>Twitter</a> &nbsp;
          <a href={config.url.contact}>Developers</a> 
        </nav>
        <p>&copy; {new Date().getFullYear()}, All Rights Reserved.</p>
      </footer>
    </div>
  )
}