import { Card, CardBody, CardImg, CardText, Col, Row } from "react-bootstrap";
import { FaClock, FaHeart, FaTruck, FaUndo } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaMoneyBill1 } from "react-icons/fa6";
export default function Bestsel() {
    return (
        <>
            <BestSeller />
            <Features/>
        </>
    );
}
function BestSeller() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,     // Auto-play on
        autoplaySpeed: 2000
    };

    return (
        <>
            <h1 className="text-center">Best Seller</h1>
            <hr className="border border-4 border-danger w-25 mx-auto my-4"></hr>

            <Slider {...settings}>
                <Col>
                    <Card style={{ height: '400px', width: '200px' }}>
                        <FaHeart className="ms-4 mt-4 mb-0 h4" />
                        <CardImg src="img/product_1.png" style={{ objectFit: 'contain' }}></CardImg>
                        <CardBody className="text-center">
                            <CardText>
                                <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                                <p className="text-danger my-2 fw-bold">Rs. 2300  <del className="text-secondary">Rs. 5000</del></p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ height: '400px', width: '200px' }}>
                        <FaHeart className="ms-4 mt-4 mb-0 h4" />
                        <CardImg src="img/product_1.png" style={{ objectFit: 'contain' }}></CardImg>
                        <CardBody className="text-center">
                            <CardText>
                                <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                                <p className="text-danger my-2 fw-bold">Rs. 2300  <del className="text-secondary">Rs. 5000</del></p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ height: '400px', width: '200px' }}>
                        <FaHeart className="ms-4 mt-4 mb-0 h4" />
                        <CardImg src="img/product_1.png" style={{ objectFit: 'contain' }}></CardImg>
                        <CardBody className="text-center">
                            <CardText>
                                <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                                <p className="text-danger my-2 fw-bold">Rs. 2300  <del className="text-secondary">Rs. 5000</del></p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ height: '400px', width: '200px' }}>
                        <FaHeart className="ms-4 mt-4 mb-0 h4" />
                        <CardImg src="img/product_1.png" style={{ objectFit: 'contain' }}></CardImg>
                        <CardBody className="text-center">
                            <CardText>
                                <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                                <p className="text-danger my-2 fw-bold">Rs. 2300  <del className="text-secondary">Rs. 5000</del></p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ height: '400px', width: '200px' }}>
                        <FaHeart className="ms-4 mt-4 mb-0 h4" />
                        <CardImg src="img/product_1.png" style={{ objectFit: 'contain' }}></CardImg>
                        <CardBody className="text-center">
                            <CardText>
                                <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                                <p className="text-danger my-2 fw-bold">Rs. 2300  <del className="text-secondary">Rs. 5000</del></p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ height: '400px', width: '200px' }}>
                        <FaHeart className="ms-4 mt-4 mb-0 h4" />
                        <CardImg src="img/product_1.png" style={{ objectFit: 'contain' }}></CardImg>
                        <CardBody className="text-center">
                            <CardText>
                                <b className="h5">Fujifilm X100T 16 MP Digital Camera (Silver)</b>
                                <p className="text-danger my-2 fw-bold">Rs. 2300  <del className="text-secondary">Rs. 5000</del></p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Slider>

        </>
    )
}
function Features() {
    return (
        <>
         <div className="feature-section my-5   ">
                <Row className="d-flex justify-content-between align-items-center bg-dark text-white m-0 py-3">
                    <Col lg="3" md="6" sm="12" className="feature">
                        <div className="feature-segment">
                            <FaTruck className="feature-icon" />
                            <div className="feature-text">
                                <h4>free shipping</h4>
                                <p>Suffered Alteration in Some Form
                                
                                </p>
                            </div>
                        
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="12" className="feature">
                        <div className="feature-segment">
                            <FaMoneyBill1 className="feature-icon" />
                            <div className="feature-text">
                                <h4>free shipping</h4>
                                <p>The Internet Tend To Repeat
                                
                                </p>
                            </div>
                        
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="12"className="feature">
                        <div className="feature-segment">
                            <FaUndo className="feature-icon" />
                            <div className="feature-text">
                                <h4>free shipping</h4>
                                <p>Making it Look Like Readable
                                
                                </p>
                            </div>
                        
                        </div>
                    </Col>
                    <Col lg="3" md="6" sm="12" className="feature">
                        <div className="feature-segment">
                            <FaClock className="feature-icon" />
                            <div className="feature-text">
                                <h4>free shipping</h4>
                                <p>8AM - 09PM
                                
                                </p>
                            </div>
                        
                        </div>
                    </Col>
                    </Row>
                    </div>
        </>
        );
        }
           
               
                 