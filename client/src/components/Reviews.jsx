import "./CreateCouch.css";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const user = localStorage.getItem("username")

const default_input = {
  username: user,
  title: "",
  description: "",
}

export default function CreateCouch() {
  const [input, setInput] = useState(default_input)
  let navigate = useNavigate()

  const handleTextInput = (event) => {
    const {id, value} = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = localStorage.getItem("token")
    if (!user) {
      alert("Please sign in to create a review")
    } else {
      const fields = input
    //   need to create heroku app and insert into axios call
      const res = await axios.post(`http://localhost:3000` , fields, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      console.log(res)
      setInput(default_input)
      navigate("/")
    }
  }

  return (
    <div>
        <Form className="create-form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={input.title} id="title" placeholder="Enter title" onChange={handleTextInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={input.description} id="description" placeholder="Enter description" onChange={handleTextInput} />
          </Form.Group>
          <Button variant="dark" type="submit" onClick={handleSubmit}>
            Create Review
          </Button>
        </Form>
    </div>
  )
}