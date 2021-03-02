
export default function Comments() {
  
  return (
    <div>
      <div>Comments <span>(Subscribe btn)</span></div>
      <form className="profile-comments">
        <div>
          <span></span>
          <textarea placeholder="Add a comment"></textarea>
        </div>
        <div>
          <button>Post Comment</button>
        </div>
      </form>
      <hr />
    </div>
  )
}