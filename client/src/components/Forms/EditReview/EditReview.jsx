import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function EditReview(props) {

  const [title, setTitle] = useState('')
  const [score, setScore] = useState(0)
  const [description, setDescription] = useState('')
  
  const {id} = useParams()

  useEffect(() => {
    const foundReview = props.reviews.find(review => {
      return review.id === parseInt(id)
    })
    if (foundReview) {
      setTitle(foundReview.title)
      setScore(foundReview.score)
      setDescription(foundReview.description)
    }
  }, [id, props.reviews ])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const review = {
        title,
        score,
        description,
      }
      props.handleEdit(id, review)
    }}>
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
      <button>Edit</button>
    </form>
  )
}