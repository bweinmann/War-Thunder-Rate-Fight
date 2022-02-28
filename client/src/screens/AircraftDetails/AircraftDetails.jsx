import axios from "axios"
import "./AircraftDetails.css"
// import Layout from "../../components/Format/Layout/Layout"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"



export default function CouchDetail(props) {

  const [aircraft, setAircraft] = useState(null)
  const {id} = useParams()
  const user = localStorage.getItem("token")
  const username = localStorage.getItem("username")
  const navigate = useNavigate()
  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      setCouch(res.data)
    }
    fetchCouch()
  }, [id])
  
  return (
    <div>AircraftDetails</div>
  )
}