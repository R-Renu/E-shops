import { Button, Card, CardBody, CardImg, CardText, Carousel, CarouselCaption, CarouselItem, Col, Container, Row, CardFooter } from "react-bootstrap";
import Header from "../common/Header";
import { FaHeart } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <Header/>
        <HomeBanner/>
        <Container>
        <Categorysection/>
        <Newarrival/>
        </Container>
     
        </>
    );
}
function HomeBanner(){
    return(
        <>
        <Carousel>
            <CarouselItem>
                <img height={500} src="img/slider_1.jpg" className="w-100" style={{objectFit:'cover'}}></img>
                <CarouselCaption className="text-dark">
                    <p className="text-uppercase">Spring / summer collection 2025</p>
                    <h1 className="my-2 fw-normal display-5">Get up to 30% off New Arrivals</h1>
                    <Button variant="danger" className="mt-3">Shop Now</Button>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img height={500} src="img/slider_2.jpg" className="w-100" style={{objectFit:'cover'}}></img>
                <CarouselCaption className="text-dark">
                    <p className="text-uppercase">Spring / summer collection 2025</p>
                    <h1 className="my-2 fw-normal display-5">Get up to 30% off New Arrivals</h1>
                    <Button variant="danger" className="mt-3">Shop Now</Button>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img height={500} src="img/slider_3.jpg" className="w-100" style={{objectFit:'cover'}}></img>
                <CarouselCaption className="text-dark">
                    <p className="text-uppercase">Spring / summer collection 2025</p>
                    <h1 className="my-2 fw-normal display-5">Get up to 30% off New Arrivals</h1>
                    <Button variant="danger" className="mt-3">Shop Now</Button>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
        </>
    );
}

function Categorysection(){
    return(
        <>
        <Row className="m-4">
            <Col className="position-relative">
              <img src="img/banner_1.jpg"></img>
              <h4 className="position-absolute top-50 start-50 bg-light p-3 text-uppercase translate-middle fw-bold">women's</h4>
            </Col>
            
            <Col className="position-relative">
              <img src="img/banner_2.jpg"></img>
              <h4 className="position-absolute top-50 start-50 bg-light p-3 text-uppercase translate-middle fw-bold">Accesorie's</h4>
            </Col>

            <Col className="position-relative">
              <img src="img/banner_3.jpg"></img>
              <h4 className="position-absolute top-50 start-50 bg-light p-3 text-uppercase translate-middle fw-bold">Men's</h4>
            </Col>
       
        </Row>
        </>
    );
}

function Newarrival(){
    return(
        <>
           <Row className="my-5">
            <h1 className="text-center">New Arrivals</h1>
            <hr className="w-25 border-5 border-danger mx-auto"></hr>
            <div className="d-flex justify-content-center text-uppercase my-4">
                <div className="p-2 border border-1 bg-danger text-light text-center fw-semibold" style={{width:100}}>All</div>
                <div className="p-2 border border-1 text-center"  style={{width:100}}>women's</div>
                <div  className="p-2 border border-1 text-center"  style={{width:150}}>Accesorie's</div>
                 <div  className="p-2 border border-1 text-center"  style={{width:100}}>Men's</div>
            </div>
           </Row>
           <Row>
            <Col lg='3' md="6" >
                <Card>
                    <FaHeart className="ms-4 mt-4 mb-0 h4"/>
                    <CardImg src="img/product_1.png"></CardImg>
                    <CardBody className="text-center">
                        <CardText>
                            <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                            <p className="text-danger my-2 fw-bold">Rs. 2300 <del className="text-secondary">Rs. 5000</del></p>
                        </CardText>
                    </CardBody>
                    <CardFooter className="bg-danger text-center text-light">Add to Cart</CardFooter>
                </Card>
            </Col>
           
            <Col lg='3' md="6" >
                <Card>
                    <FaHeart className="ms-4 mt-4 mb-0 h4"/>
                    <CardImg src="img/product_2.png"></CardImg>
                    <CardBody className="text-center">
                        <CardText>
                            <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                            <p className="text-danger my-2 fw-bold">Rs. 2300 <del className="text-secondary">Rs. 5000</del></p>
                        </CardText>
                    </CardBody>
                    <CardFooter className="bg-danger text-center text-light">Add to Cart</CardFooter>
                </Card>
            </Col>

             <Col lg='3' md="6" >
                <Card>
                    <FaHeart className="ms-4 mt-4 mb-0 h4"/>
                    <CardImg src="img/product_3.png"></CardImg>
                    <CardBody className="text-center">
                        <CardText>
                            <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                            <p className="text-danger my-2 fw-bold">Rs. 2300 <del className="text-secondary">Rs. 5000</del></p>
                        </CardText>
                    </CardBody>
                    <CardFooter className="bg-danger text-center text-light">Add to Cart</CardFooter>
                </Card>
            </Col>

             <Col lg='3' md="6" >
                <Card>
                    <FaHeart className="ms-4 mt-4 mb-0 h4"/>
                    <CardImg src="img/product_4.png"></CardImg>
                    <CardBody className="text-center">
                        <CardText>
                            <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                            <p className="text-danger my-2 fw-bold">Rs. 2300 <del className="text-secondary">Rs. 5000</del></p>
                        </CardText>
                    </CardBody>
                    <CardFooter className="bg-danger text-center text-light">Add to Cart</CardFooter>
                </Card>
            </Col>
        </Row>
        </>
    );
}
