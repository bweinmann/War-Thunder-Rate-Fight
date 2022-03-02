import React from 'react'
import {Link} from 'react-router-dom'
import './Aircraft.css'

export default function Aircraft(props) {

  return (
    <div className="aircraft-card-container">
            {props.searchParams.map(aircraft => (
              <div className="aircraft-card">
              <Link className="aircraft-review-link" key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>
                <img src={aircraft.image_url} alt="aircraft"/>
                <h5>{aircraft.name}</h5>
              </Link>
              </div>
            ))
          }
    </div>
  )
}