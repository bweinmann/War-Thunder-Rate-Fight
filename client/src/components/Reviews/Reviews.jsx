import { getComment, createComment, deleteComment, updateComment} from '../../services/comments' 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Comment from '../../components/Comments/Comments'
import CreateComment from '../Forms/CreateComment/CreateComment'



export default function Review(props) {
    console.log(props.currentUser)

    const [comments, setComments] = useState([])
    const [review, setReview] = useState(null)
    const [toggle, setToggle] = useState(false)
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
  
    }, [id, props.reviews, toggle])
   
    const handleCreateComment = async (formData) => {
      await createComment(id, formData)
      setToggle(prevToggle => !prevToggle)
      }
    
    const handleDeleteComment = async (comment_id) => {
      await deleteComment(id, comment_id)
      setToggle(prevToggle => !prevToggle)
      }

    // const handleEditComment = async (id, formData) => {
    //   await updateComment(id, formData)
    //   setToggle(prevToggle => !prevToggle)
    //   navigate(`/reviews/${id}`)
    // }

  return (
    <div>
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
                  <button>Edit</button>
                  <button onClick={() => props.handleDeleteReview(review.id)}>
                    Delete
                  </button>
                  <CreateComment handleCreateComment={ handleCreateComment}/>
                  <Comment 
                  handleDeleteComment={handleDeleteComment}
                  currentUser={props.currentUser} 
                  comments={comments}
                  /> 
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