import "./AircraftList.css"
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
// import Aircraft from '../../components/Aircraft/Aircraft'
import { getAllAircraft } from '../../services/aircraft'
import Layout from "../../components/Format/Layout/Layout"
import Search from "../../components/Search/Search"
import Sort from "../../components/Sort/Sort"
import {asc, desc} from "../../utilities/Sort.js"

export default function AircraftList() {
  const [aircrafts, setAircrafts] = useState([])
  const [searchParams, setSearchParams] = useState([])
  const [sort, setSort] = useState(false)
  const [sortParams, setSortParams] = useState("title-ascending")

  useEffect(() => {
    const fetchAircraft = async () => {
      const resp = await getAllAircraft();
      setAircrafts(resp);
      console.log(resp);
    }
    fetchAircraft()
  }, [])

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortParams(type)
    }
    if (type === "title-ascending") {
      setSearchParams(asc(searchParams))
    } else if (type === "title-descending") {
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
    aircraft.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchParams(searchResults)
    setSort(true)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div>
      <Layout>
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <Sort onSubmit={handleSubmit} handleSort={handleSort} />
            {searchParams.map((aircraft) => {
              <Link key={aircraft.id} to={`/aircraft/${aircraft.id}`}>
              <img src={aircraft.image_url} />
              <h4>{aircraft.title}</h4>
              <h4>{aircraft.score}</h4>
            </Link>
            })}  
            )
      </Layout>
    </div>
  )
}