import "./AircraftDetails.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReview, createReview, deleteReview, updateReview} from '../../services/reviews'
import Review from '../../components/Reviews/Reviews'
import CreateReview from '../../components/Forms/CreateReview/CreateReview'



export default function AircraftDetail(props) {
  
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

  const handleEditReview = async (id, secondid, formData) => {
    console.log(formData)
    await updateReview(id, secondid, formData)
    setToggle(prevToggle => !prevToggle)
  }

  return (
      <div className="review-section">
        {
          aircraft?.id ? 
            <>
              <div className="aircrafts-container">
              <img src={aircraft.image_url} alt="aircraft"/>
              <h2>{aircraft.title}</h2>
              </div>
              <CreateReview handleCreateReview={ handleCreateReview }/>
              <Review
                currentUser={props.currentUser}
                reviews={reviews}
                handleDeleteReview={ handleDeleteReview }
                handleEditReview={ handleEditReview}
              />
              
            </>
            :
            <h3>No aircraft found</h3>
        }
      </div>
  )
}