import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateReview } from '../../services/posts';
import { updateComment } from '../../services/comments';

export function UpdateForm(props) {
  const { review, commentId } = props;
  const [comments, setComments]=useState(post);
  let keys = Object.keys(review);
  console.log(review, review[keys[0]], keys);
  let nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value}=e.target
      setComments((prevReview) => ({
      ...prevReview,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("authToken") != null) {
      console.log(comments)
      if (!props.reviewValue) {
        await updateComment(review.id, commentId, comments)
      } else {
         await updateReview(review.id, comments)
      }
      window.location.reload(false);
    } else {
      alert("You need to sign in!");
      nav("/login");
    }
  }

  function Library() {
    return <>
    {keys.map((key,i) => {
      return <>{ (key !== 'post_id' && key!=="id" && key!=="comments" && key!=="user" && key !=='user_id') && <textarea name={`${key}`} placeholder={key} value={comments[key]} key={i} onChange={(e)=>{handleChange(e);}} style={{height:"10vh"}}></textarea>}</>
    })}
      </>
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <Library></Library>
      <button>Submit</button>
    </form>
  )
}