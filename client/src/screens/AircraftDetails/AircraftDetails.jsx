import axios from "axios"
import "./AircraftDetails.css"
// import Layout from "../../components/Format/Layout/Layout"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"



export default function AircraftDetail(props) {

  const [aircraft, setAircraft] = useState(null)
  const {id} = useParams()
  const user = localStorage.getItem("token")
  const username = localStorage.getItem("username")
  const navigate = useNavigate()
  useEffect(() => {
    const fetchAircraft = async () => {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      setAircraft(res.data)
    }
    fetchAircraft()
  }, [id])
  
  return (
    <div>AircraftDetails</div>
  )
}