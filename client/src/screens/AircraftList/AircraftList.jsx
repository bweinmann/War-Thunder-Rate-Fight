import "./AircraftList.css"
import {useState, useEffect} from "react"
import { Routes, Route } from 'react-router-dom'
import Aircraft from '../../components/Aircraft/Aircraft'
import { getAllAircraft } from '../../services/aircraft'
import Search from "../../components/Search/Search"
import Sort from "../../components/Sort/Sort"
import {asc, desc} from "../../utilities/Sort.js"
import AircraftDetails from '../AircraftDetails/AircraftDetails'

export default function AircraftList(props) {
  
  const [aircrafts, setAircrafts] = useState([])
  const [searchParams, setSearchParams] = useState([])
  const [sort, setSort] = useState(false)
  const [sortParams, setSortParams] = useState("name-ascending")

  useEffect(() => {
    const fetchAircraft = async () => {
      const resp = await getAllAircraft();
      setAircrafts(resp);
      setSearchParams(resp);
    }
    fetchAircraft()
  }, [])

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortParams(type)
    }
    if (type === "name-ascending") {
      setSearchParams(asc(searchParams))
    } else if (type === "name-descending") {
      setSearchParams(desc(searchParams))

    } else {
      type = "No results match"
    }
  }

  if (sort) {
    handleSort(sortParams)
    setSort(false)
  }

  const handleSearch = (e) => {
    const searchResults = aircrafts.filter((aircraft) => 
    aircraft.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchParams(searchResults)
    setSort(true)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div className="aircraft-list-container">
         <div className="aircraft-list">
         <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <Sort onSubmit={handleSubmit} handleSort={handleSort} />
          <Routes>
            <Route path='/' element={
          <Aircraft
            aircrafts={aircrafts}
            currentUser={props.currentUser}
            searchParams={searchParams}
           />
          } />
           <Route path=":id" element={<AircraftDetails currentUser={props.currentUser} aircrafts={aircrafts} />} />
        </Routes>
        </div>
    </div>
  )
}