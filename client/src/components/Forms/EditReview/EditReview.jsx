import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './EditReview.css'

export default function EditReview(props) {
  
  const [title, setTitle] = useState('')
  const [score, setScore] = useState(0)
  const [description, setDescription] = useState('')
  const { formupdate, setFormupdate } = props
  
  const {id} = useParams()

  useEffect(() => {
    let foundReview
    if (props?.reviewid) {foundReview = props.reviews.find(review => {
      return review.id === parseInt(props.reviewid)})} 
    else {foundReview = props.reviews.find(review => {
      return review.id === parseInt(id)
    })}
    if (foundReview) {
      setTitle(foundReview.title)
      setScore(foundReview.score)
      setDescription(foundReview.description)
    }
  }, [id, props.reviews ])

  return (
    <div className="review-form-container">
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(title)
      const review = {
        title,
        score,
        description,
      }
      setFormupdate(review);
      console.log(formupdate)
      props.handleEditReview(id, review)
    }}>
      <div className="review-form">
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type='number'
        onChange={(e) => setScore(e.target.valueAsNumber)}
        value={score}
      />
      <input
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Confirm Changes</button>
      </div>
    </form>
    </div>
  )
}