import { useContext } from 'react'
import { Context } from '../Provider'
import Comments from './Profile/Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../fake-data'

export default function Profile() {
  const [context, dispatch] = useContext(Context)

  return (
    <div className="container">
      <div className="profile-feed">
        <div className="profile-feed-content">

          <div>the buttons will open lists here in this section:(defaults to recent activity..?)</div>

        </div>
        <Comments />
      </div>
      <div className="profile-bio">
        <div className="bio-nav">
          <div>
            <img className="avatar-image" src={`${data.user.avatar}`} alt={`${data.user.name}'s avatar`} />
            <p>Name: {data.user.name}</p>
            <div>Address: {data.user.location}</div>
            <div>Bio: {data.user.description}</div>
            <div>Website: {data.user.website}</div>
            {data.user.social_links.map((link, index) =>
              <div id={index}>{link}</div>
            )}
          </div>
          <div className="bio-nav">
            {context.authenticated
              ? <button>Message</button>
              : <button>Add Friend</button>
            }
            <div className="profile-dropdown">
              <button className="profile-dropbtn">
                <FontAwesomeIcon icon={faCaretSquareDown} />
              </button>
              <div className="profile-dropdown-content">
                <button>Unfriend</button>
                <button>Block</button>
                <button>Report</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {data.user.uploads.title !== undefined && <button>Uploads</button>}
          <button>Games</button>
          <button>Wishlist</button>
          <button>Reviews</button>
          <button>Friends</button>
          <button>Following</button>
        </div>
      </div>
    </div>
  )
}