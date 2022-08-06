import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import pixie from "../assets/img/trending/pixie(2020).jpg"
import medium from "../assets/img/trending/medium-cover(2021).jpg"
import anything from "../assets/img/trending/anything's-possible(2022).jpg"
import makeme from "../assets/img/trending/don't-make-me-go_cover(2022).jpg"
import grey from "../assets/img/trending/gray-man_cover(2022).jpg"
import art from "../assets/img/trending/art-of-love(2021).jpg"

const Trending = () => {
    return (
        <Container>
            <br />
            <br />
            <h1 className="text-white">TRENDING LIST</h1>
            <br />
            <Row>
                <Col md={4} className="MovieWrapper" id="trending">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={pixie} alt="pixie" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Pixie (2020)</Card.Title>
                                <Card.Text className="text-left">
                                Pixie Hardy sets out to avenge her mother's death and attempts a 
                                heist that will give her the means to leave her small-town life behind.
                                When the plan goes horribly wrong,
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={medium} alt="medium" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">The Forgiven (2021)</Card.Title>
                                <Card.Text className="text-left">
                                While driving to a party at a grand villa, 
                                a wealthy couple on the verge of divorce accidentally 
                                hit and kill a young Moroccan man who was selling fossils on the roadside.
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={anything} alt="anything" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Anything's Possible (2022)</Card.Title>
                                <Card.Text className="text-left">
                                A high school student with a crush summons the courage to 
                                ask a transsexual teen out on a date, knowing the drama it could cause.
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={makeme} alt="makeme" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Don't Make Me Go (2022)</Card.Title>
                                <Card.Text className="text-left">
                                A terminally ill man and his teenage daughter embark on a road trip from California 
                                to New Orleans for his 20th college reunion.
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={grey} alt="grey" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Grey Man (2022)</Card.Title>
                                <Card.Text className="text-left">
                                When the CIA's top asset -- his 
                                identity known to no one -- uncovers agency secrets,
                                </Card.Text>
                                <div className="moreButton mt-4 text-center">
                                   <Button className="bg-blue text-white"> More Details</Button> 
                                </div>
                    </div>  
                </Card>
                </Col>
                <Col md={4} className="MovieWrapper">
                <Card className="bg-dark MovieCoverImage">
                    <Image src={art} alt="art" className="TrendingImages" />
                    <div className="p-2 m-2 text-white">
                        <Card.Title className="text-center">Art of Love (2021)</Card.Title>
                                <Card.Text className="text-left">
                                A professor at a top university in Puerto Rico falls 
                                in love with an aspiring artist from the immigrant Chinese community.
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

export default Trending