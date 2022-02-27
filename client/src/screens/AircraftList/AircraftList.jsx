import axios from "axios"
import "./AircraftList.css"
import Layout from "../../Format/Layout/Layout"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {Card, Container, Row, Col} from "react-bootstrap"

const baseURL = "localhost:3000"

export default function AircraftList() {
  const [aircrafts, setAircrafts] = useState([])
  const [searchParams]

  useEffect(() => {
    const fetchAircraft = async () => {
      const res = await axios.get(`${baseURL}/aircraft`)
      console.log(res.data)
      setAircrafts(res.data.data)
    }
    fetchAircraft()
  }, [])

  return (
    <div>
      <Layout>
        <Container className="aircraft-grid">
          <Row>
            {searchParams.map((aircraft) => {
              return (
                <Col xs="12" sm="6" lg="4" xl="3" style={{Layout: "flex", justifyContent: "center"}}>
                  <Link to={`/aircraft/${aircraft._id}`} style={{textDecoration: "none"}}>
                    <Card bg={"dark"} style={{width: "250px", height: "300px"}} key={aircraft._id}>
                      <Card.Img variant="top" src={aircraft.image_URL} alt={aircraft.title}></Card.Img>
                      <Card.Body>
                        <Card.Title>{aircraft.title}</Card.Title>
                        <Card.Text>{aircraft.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      </Layout>
    </div>
  )
}