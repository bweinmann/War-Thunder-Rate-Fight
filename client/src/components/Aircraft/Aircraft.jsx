import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../Format/Layout/Layout'
// import { useState, useEffect } from 'react'
// import Search from "../../components/Search/Search"
// import Sort from "../../components/Sort/Sort"
// import {asc, desc} from "../../utilities/Sort.js"


export default function Aircraft(props) {

    // const [searchParams, setSearchParams] = useState([])
    // const [sort, setSort] = useState(false)
    // const [sortParams, setSortParams] = useState("location-ascending")

    // useEffect(() => {
    //   const fetchAircraft = async () => {
    //     const res = await getAllAircraft();
    //     setAircrafts(res.data.data)
    //     setSearchParams(res.data.data)
    //   }
    //   fetchAircraft()
    // }, [])

    // const handleSort = (type) => {
    //     if (type !== "" && type !== undefined) {
    //       setSortParams(type)
    //     }
    //     if (type === "title-ascending") {
    //       setSearchParams(asc(searchParams))
    //     } else if (type === "title-descending") {
    //       setSearchParams(desc(searchParams))
    //     } else {
    //       type = "No results match"
    //     }
    //   }

  return (
    <div>
      <Layout>
        {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <Sort onSubmit={handleSubmit} handleSort={handleSort} /> */}
            {props.aircrafts.map(aircraft => (
              <Link key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>
                <img src={aircraft.image_url} />
                <h4>{aircraft.title}</h4>
                <h4>{aircraft.score}</h4>
              </Link>
            ))
          }
      </Layout>
    </div>
  )
}