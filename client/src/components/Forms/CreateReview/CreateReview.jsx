import {useState} from 'react'

export default function CreateReview(props) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault()

      const review = {
        title,
        description
      }
      
      props.handleCreateReview(review)
    }}>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Post Review</button>
    </form>
  )
}