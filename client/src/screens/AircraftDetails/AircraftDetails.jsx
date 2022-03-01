import "./AircraftDetails.css"
import Layout from "../../components/Format/Layout/Layout"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReview, createReview, deleteReview, updateReview} from '../../services/reviews'
import { getComment, createComment, deleteComment, updateComment} from '../../services/comments' 
import Review from '../../components/Reviews/Reviews'
import CreateReview from '../../components/Forms/CreateReview/CreateReview'
import DeleteReview from "../../components/Reviews/DeleteReview"
// import EditReview from '../../components/Forms/EditReview/EditReview'
import Comment from '../../components/Comments/Comments'
import CreateComment from '../../components/Forms/CreateComment/CreateComment'

export default function AircraftDetail(props) {

  const [aircraft, setAircraft] = useState(null)
  const {id} = useParams()
  const [reviews, setReviews] = useState([])
  const [comments, setComments] = useState([])
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const foundAircraft = props.aircrafts.find(aircraft => {
      return aircraft.id === parseInt(id)
    })
    const fetchReviews = async () => {
      const reviews = await getReview(id)
      setReviews(reviews)
    }
    const fetchComments = async () => {
      const comments = await getComment(id)
      setComments(comments)
    }
    fetchReviews();
    fetchComments();
    setAircraft(foundAircraft);

  }, [id, props.aircrafts, toggle])

  const handleCreateReview = async (formData) => {
    await createReview(id, formData)
    setToggle(prevToggle => !prevToggle)
  }

  const handleDeleteReview = async (review_id) => {
    await deleteReview(id, review_id)
    setToggle(prevToggle => !prevToggle)
  }

  // const handleEditReview = async (id, formData) => {
  //   await updateReview(id, formData)
  //   setToggle(prevToggle => !prevToggle)
  // }

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
    //   navigate(`/aircrafts/${id}`)
    // }

  return (
      <div>
        {
          aircraft?.id ? 
            <>
              <img src={aircraft.image_url} />
              <h2>{aircraft.title}</h2>
              
              <CreateReview handleCreateReview={ handleCreateReview}/>
              {/* <EditReview handleEditReview={ handleEditReview}/> */}
              <Review
                currentUser={props.currentUser}
                reviews={reviews}
                handleDeleteReview={handleDeleteReview}
                // handleEditReview={ handleEditReview}
              />
    
              <CreateComment handleCreateComment={ handleCreateComment}/>
              {/* <EditComment handleEditComment={ handleEditComment}/> */}
              <Comment
                currentUser={props.currentUser}
                comments={comments}
                handleDeleteComment={handleDeleteComment}
                // handleEditComment={ handleEditComment}
                />
            </>
            :
            <h3>No aircraft found</h3>
        }
      </div>
  )
}