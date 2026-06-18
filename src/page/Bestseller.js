import { Card, CardBody, CardImg, CardText, Col, } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Bestsel() {
    return (
        <>
            <BestSeller />
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