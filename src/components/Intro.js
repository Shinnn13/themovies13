import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex text-center justify-content-center align-items-center">
                <Row>
                    <Col>
                    <div className="tittle">WATCH FREE</div>
                    <div className="tittle">MUST BUY A TICKET</div>
                    <div className="IntroButton mt-4 text-center">
                        <Button variant="dark">
                            View All List
                        </Button>
                    </div>
                    </Col>
                </Row>
            </Container>  
        </div>
        
    )
}

export default Intro