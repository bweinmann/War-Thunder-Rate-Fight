import {useState} from 'react'

export default function CreateReview(props) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [score, setScore] = useState(0)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()

      const review = {
        title,
        score,
        description
      }
      
      props.handleCreateReview(review)
    }}>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type='number' value={score} onChange={(e) => setScore(e.target.valueAsNumber)}/>
      <button>Post Review</button>
    </form>
  )
}