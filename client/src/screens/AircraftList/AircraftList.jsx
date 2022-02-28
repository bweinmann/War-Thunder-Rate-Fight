import axios from "axios"
import "./AircraftList.css"
import Layout from "../../components/Format/Layout/Layout"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {Card, Container, Row, Col} from "react-bootstrap"
import Search from "../../components/Search/Search"
import Sort from "../../components/Sort/Sort"
import {asc, desc} from "../../utilities/Sort.js"

const baseURL = "localhost:3000"

export default function AircraftList() {
  const [aircrafts, setAircrafts] = useState([])
  const [searchParams, setSearchParams] = useState([])
  const [sort, setSort] = useState(false)
  const [sortParams, setSortParams] = useState("location-ascending")

  useEffect(() => {
    const fetchAircraft = async () => {
      const res = await axios.get(`${baseURL}/aircraft`)
      console.log(res.data)
      setAircrafts(res.data.data)
      setSearchParams(res.data.data)
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