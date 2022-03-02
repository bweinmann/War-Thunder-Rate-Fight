import "./AircraftDetails.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReview, createReview, deleteReview, updateReview} from '../../services/reviews'
import Review from '../../components/Reviews/Reviews'
import CreateReview from '../../components/Forms/CreateReview/CreateReview'
// import DeleteReview from "../../components/Reviews/DeleteReview"
// import EditReview from '../../components/Forms/EditReview/EditReview'
// import Comment from '../../components/Comments/Comments'
// import CreateComment from '../../components/Forms/CreateComment/CreateComment'

export default function AircraftDetail(props) {
  console.log(props.currentUser)
  const [aircraft, setAircraft] = useState(null)
  const {id} = useParams()
  const [reviews, setReviews] = useState([])
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const foundAircraft = props.aircrafts.find(aircraft => {
      return aircraft.id === parseInt(id)
    })
    const fetchReviews = async () => {
      const reviews = await getReview(id)
      setReviews(reviews)
    }
   
    fetchReviews();
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

  // const handleCreateComment = async (formData) => {
  //   await createComment(id, formData)
  //   setToggle(prevToggle => !prevToggle)
  //   }
    
  // const handleDeleteComment = async (comment_id) => {
  //   await deleteComment(id, comment_id)
  //   setToggle(prevToggle => !prevToggle)
  //   }

    // const handleEditComment = async (id, formData) => {
    //   await updateComment(id, formData)
    //   setToggle(prevToggle => !prevToggle)
    //   navigate(`/aircrafts/${id}`)
    // }

  return (
      <div className="review-section">
        {
          aircraft?.id ? 
            <>
              <img src={aircraft.image_url} />
              <h2>{aircraft.title}</h2>
              
              <CreateReview handleCreateReview={ handleCreateReview }/>
              {/* <EditReview handleEditReview={ handleEditReview}/> */}
              <Review
                currentUser={props.currentUser}
                reviews={reviews}
                handleDeleteReview={ handleDeleteReview }
                // handleEditReview={ handleEditReview}
              />
            </>
            :
            <h3>No aircraft found</h3>
        }
      </div>
  )
}