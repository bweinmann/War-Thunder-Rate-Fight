import "./AircraftList.css"
import {useState, useEffect} from "react"
import { Routes, Route } from 'react-router-dom';
import Aircraft from '../../components/Aircraft/Aircraft'
import { getAllAircraft } from '../../services/aircraft'

export default function AircraftList(props) {
  const [aircrafts, setAircrafts] = useState([])

  useEffect(() => {
    const fetchAircraft = async () => {
      const res = await getAllAircraft();
      setAircrafts(res)
    }
    fetchAircraft()
  }, [])

  return (
    <div>
          <Routes>
            <Route path='/reviews' element={
              <Aircraft
              aircrafts={aircrafts}
              currentUser={props.curretUser} />
            } />
          </Routes>
    </div>
  )
}