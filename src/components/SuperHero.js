import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import shangchi from "../assets/img/superhero/0c741d63608bcbaf753c956a7c996cab.jpg"
import Bwidow from "../assets/img/superhero/71lADxngTWS._AC_SL1050_.jpg"
import endgame from "../assets/img/superhero/71niXI3lxlL._AC_SL1183_.jpg"
import farfromhome from "../assets/img/superhero/marvel-cinematic-universe-spiderman-far-from-home-movie-poster.jpg"
import nowayhome from "../assets/img/superhero/snh_online_6072x9000_posed_01.jpg"
import thor from "../assets/img/superhero/tlat_payoffposter_ph_id_d335e44b.jpeg"

const Superhero = () => {
    return (
        <Container>
            <br />
            <br />
            <h1 className="text-white">SUPERHERO LIST</h1>
            <br />
            <Row>
                <Col md={4} className="MovieWrapper" id="superhero">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={shangchi} alt="pixie" className="shangci" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Shang-Chi (2021)</Card.Title>
                                <Card.Text className="text-left">
                                Martial-arts master Shang-Chi confronts the past 
                                he thought he left behind when he's drawn into the 
                                web of the mysterious Ten Rings organization.
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={Bwidow} alt="Bwidow" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Black Widow (2021)</Card.Title>
                                <Card.Text className="text-left">
                                Natasha Romanoff, aka Black Widow, 
                                confronts the darker parts of her ledger 
                                when a dangerous conspiracy with ties to her past arises.
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={endgame} alt="endgame" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Avanger Endgme (2019)</Card.Title>
                                <Card.Text className="text-left">
                                Adrift in space with no food or water, Tony Stark sends a message 
                                to Pepper Potts as his oxygen supply starts to dwindle. 
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={farfromhome} alt="farfromhome" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Spder-Man Faro From Home (2019)</Card.Title>
                                <Card.Text className="text-left">
                                Peter Parker's relaxing European vacation takes an unexpected turn when Nick 
                                Fury shows up in his hotel room to recruit him for a mission. 
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={nowayhome} alt="nowayhome" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Spieder-Man No Way home (2021)</Card.Title>
                                <Card.Text className="text-left">
                                With Spider-Man's identity now revealed, our friendly neighborhood web-slinger 
                                is unmasked and no longer able to separate his
                                normal life as Peter Parker from the high stakes of being a superhero. 
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={thor} alt="thor" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Thor Love and Thuder (2022)</Card.Title>
                                <Card.Text className="text-left">
                                Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. 
                                However, his retirement gets interrupted by Gorr the God Butcher, 
                                a galactic killer who seeks the extinction of the gods.
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Superhero