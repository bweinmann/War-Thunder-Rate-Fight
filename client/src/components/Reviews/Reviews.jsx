import { getComment, createComment, deleteComment, updateComment} from '../../services/comments' 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Comment from '../../components/Comments/Comments'
import CreateComment from '../Forms/CreateComment/CreateComment'
import EditReview from '../Forms/EditReview/EditReview'


export default function Review(props) {
    
    const [comments, setComments] = useState([])
    const [review, setReview] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [aircraftid, setAircraftid] =useState([])
    const [show, setShow] = useState(false)
    const [formupdate, setFormupdate] = useState([])
    const {id} = useParams()

    useEffect(() => {
      const foundReview = props.reviews.find(review => {
        return review.id === parseInt(id)
      })
      const fetchComments = async () => {
        const comments = await getComment(id)
        setComments(comments)
      }
      
      fetchComments();
      setReview(foundReview);
      setAircraftid(id);

    }, [id, props.reviews, toggle])
   
    const handleCreateComment = async (formData) => {
      await createComment(id, formData)
      setToggle(prevToggle => !prevToggle)
      }
    
    const handleDeleteComment = async (comment_id) => {
      await deleteComment(id, comment_id)
      setToggle(prevToggle => !prevToggle)
      }

    const handleEditComment = async (id, formData) => {
      await updateComment(id, formData)
      setToggle(prevToggle => !prevToggle)
    }

  return (
    <div className="reviews">
      {props.reviews && 
        props.reviews.map(review => (
          <div key={review.id}>
            <h3>{review.title}</h3>
            <h4>Author: {review.user.username}</h4>
            <h4>{review.score}</h4>
            <p>{review.description}</p>
            {
              props.currentUser?.id === review.user_id ?
                <>

                  <button onClick={(e) => {e.preventDefault();
                setShow((prevShow) => !prevShow) }}>Edit Review
                 </button>

                {show &&  <button onClick={() => props.handleEditReview(aircraftid,review?.id, formupdate)}>
                    Sumbit
                  </button> }

                  {show && <EditReview reviews={props.reviews} setFormupdate={setFormupdate} formupdate={formupdate} reviewid={review.id}/>}
                  <button onClick={() => props.handleDeleteReview(review.id)}>
                    Delete
                  </button>
                  <CreateComment handleCreateComment={ handleCreateComment}/>
                  </>
                  :
                  null
                }
                <Comment 
                  handleDeleteComment={handleDeleteComment}
                  handleEditComment={ handleEditComment}
                  currentUser={props.currentUser} 
                  comments={comments}
              /> 
          </div>
        ))
      }
    </div>
  )
}