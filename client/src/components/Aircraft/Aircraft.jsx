import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../Format/Layout/Layout'
// import { useState, useEffect } from 'react'



export default function Aircraft(props) {

  
  return (
    <div>
      <Layout>
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