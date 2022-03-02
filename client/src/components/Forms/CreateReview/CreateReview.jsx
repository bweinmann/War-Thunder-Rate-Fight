import {useState} from 'react'
import './CreateReview.css'

export default function CreateReview(props) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [score, setScore] = useState(0)

  return (
    <div className="review-form">
    <form onSubmit={(e) => {
      e.preventDefault()

      const review = {
        title,
        score,
        description
      }
      
      props.handleCreateReview(review)
    }}>
      <input placeholder="title" type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="score out of 5" type='number' value={score} onChange={(e) => setScore(e.target.valueAsNumber)}/>
      <button>Post Review</button>
    </form>
    </div>
  )
}