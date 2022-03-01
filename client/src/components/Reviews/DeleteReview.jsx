import { deleteReview } from '../../services/reviews'
import { useNavigate } from 'react-router-dom'

export default function DeleteReview(props) {
  
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    await deleteReview(id)
    navigate('/aircrafts')
  }
  console.log(props.review)
  return (
    <div><button onClick={() => handleDelete(props.review)}>Delete Review</button></div>
  )
}