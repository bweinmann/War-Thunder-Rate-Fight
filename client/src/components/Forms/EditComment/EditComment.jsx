import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function EditComment(props) { 

  const [description, setDescription] = useState('')
  const { formupdate, setFormupdate } = props
  
  const {id} = useParams()

  useEffect(() => {
    let foundComment
    if (props?.commentid) {foundComment = props.comments.find(comment => {
      return comment.id === parseInt(props.commentid)})} 
    else {foundComment = props.comments.find(comment => {
      return comment.id === parseInt(id)
    })}
    if (foundComment) {
      setDescription(foundComment.description)
    }
  }, [id, props.comments])

  return (

    <form onSubmit={(e) => {
      e.preventDefault()
     
      const comment = {
        description,
      }
      setFormupdate(comment);
      console.log(formupdate)
      props.handleEditComment(id, comment)
      
    }}>
      <input
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Confirm Changes</button>
    </form>
  )
}