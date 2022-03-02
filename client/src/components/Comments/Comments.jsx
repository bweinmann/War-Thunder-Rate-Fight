import './Comments.css' 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EditComment from '../Forms/EditComment/EditComment'

export default function Comment(props) {

    const [comment, setComment] = useState([])
    const [reviewid, setReviewid] =useState([])
    const [show, setShow] = useState(false)
    const [formupdate, setFormupdate] = useState([])
    const {id} = useParams()

    useEffect(() => {
      const foundComment = props.comments.find(comment => {
        return comment.id === parseInt(id),
        setComment(comment)
      })

      setComment(foundComment);
      setReviewid(id);
      console.log(formupdate)
      
    }, [id, props.comments])

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
                  <button onClick={(e) => {e.preventDefault();
                setShow((prevShow) => !prevShow) }}>Edit Comment

                 </button>
                {show &&  <button onClick={() => props.handleEditComment(reviewid,comment?.id, formupdate)}>
                    Sumbit
                  </button> }
                  {show && <EditComment comments={props.comments} setFormupdate={setFormupdate} formupdate={formupdate} commentid={comment.id}/>}
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
