import "./AircraftDetails.css"
// import Layout from "../../components/Format/Layout/Layout"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReview, createReview, deleteReview} from '../../services/reviews' 
import Review from '../../components/Reviews/Reviews'

export default function AircraftDetail(props) {

  const [aircraft, setAircraft] = useState(null)
  const {id} = useParams()
  const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    const foundAircraft = props.aircrafts.find(aircraft => {
      return aircraft.id === parseInt(id)
    })
    const fetchReviews = async () => {
      const reviews = await getReview(id)
      setReviews(reviews)
    }
    fetchReviews()
    setAircraft(foundAircraft)

  }, [id, props.aircrafts, toggle])

  const handleCreateReview = async (formData) => {
    await createReview(id, formData)
    setToggle(prevToggle => !prevToggle)
  }

  const handleDeleteReview = async (review_id) => {
    await deleteReview(id, review_id)
    setToggle(prevToggle => !prevToggle)
  }
  return (
      <div>
        {
          aircraft?.id ? 
            <>
              <img src={aircraft.image_url} />
              <h2>{aircraft.title}</h2>
              
              <CreateReview handleCreateReview={ handleCreateReview}/>
              <Review
                currentUser={props.currentUser}
                reviews={reviews}
                handleDeleteReview={handleDeleteReview}
              />
            </>
            :
            <h3>Sorry, no aircraft found.</h3>
        }
      </div>
  )
}