import {useState} from 'react'

export default function CreateComment(props) {

  const [description, setDescription] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault()

      const review = {
        description
      }
      
      props.handleCreateComment(review)
    }}>
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Comment</button>
    </form>
  )
}