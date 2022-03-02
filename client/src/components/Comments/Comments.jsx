import './Comments.css'

export default function Comment(props) {
  return (
    <div className="comments">
      {props.comments && 
        props.comments.map(comment => (
          <div key={comment.id}>
            <h4>Author: {comment.user.username}</h4>
            <p>{comment.description}</p>

            {
              props.currentUser?.id === comment.user_id ?
                <>
                  <button>Edit</button>
                  <button onClick={() => props.handleDeleteComment(comment.id)}>
                    Delete
                  </button>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
  )
}
