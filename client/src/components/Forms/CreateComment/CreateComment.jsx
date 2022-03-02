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
      <div className="input">
      <input placeholder="comment" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Post</button>
      </div>
    </form>
  )
}