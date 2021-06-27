import React,{useEffect ,useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StyleCards.css'

export default function Cards() {
    const [epicArray, setEpicArray] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=K6FLQtrQpXhz6wDRuCrVbtdmWl2hvnEz0aklQYZ3`)
        .then(Response => {
            setEpicArray (Response.data)
            console.log(epicArray)
        })
    },[])
    const allCards = epicArray.map((epic) => {
                        return (
                            <div className="card" key={epic.identifier}>
                                <img src={`https://epic.gsfc.nasa.gov/archive/natural/2021/06/11/png/${epic.image}.png`} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{epic.date}</h5>
                                    <p className="card-text">{epic.caption}</p>
                                </div>
                            </div>
                        )
                    })
                
    return (
        <div>
            {console.log(epicArray)}
            
                <div className="content">
                <Container className="Cont">
                    <Row>
                    {allCards.map((item) => {
                    return <Col xs="4">
                        {item}
                    </Col>
                })}
                    </Row>
                </Container >
            </div >
        </div>
    )
}
