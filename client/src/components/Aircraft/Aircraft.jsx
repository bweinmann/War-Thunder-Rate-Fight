import React from 'react'
import {Link} from 'react-router-dom'
import './Aircraft.css'



export default function Aircraft(props) {

  
  return (
    <div>
            {props.aircrafts.map(aircraft => (
              <Link key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>
                <img src={aircraft.image_url} />
                <h4>{aircraft.name}</h4>
              </Link>
            ))
          }
    </div>
  )
}