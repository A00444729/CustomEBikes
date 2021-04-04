import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="Home">
            <div className="banner">
                <header>
                    <div className="banner-contents">
                        <h1 className="banner-heading">Custom Design . Pay . Ride</h1>
                        <p className="banner-description">
                        E-bike enthusiasts who want their E-bikes to be customized according to their <br></br>
                        needs and budget. Variety of customization options are type/category of e-bike,<br></br>
                        battery capacity, motor power, wheel type, shifter type, drive type, acceleration type,<br></br>
                        extensions, and colors.  
                        </p>
                    </div>
                </header>
            </div>
            <div className="customization p-5">
                <div className="text-center">
                    <h1 className="heading">Bike Customization <span><img src="/images/cycle_icon.png" className="icon" /></span></h1>
                </div>
                <Container className="customize">
                    <div className="row">
                        <div className="col-md-4 p-2">
                            <Card bg="dark" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title>Color</Card.Title>
                                    </div>
                                    <Card.Text>
                                        Choose color for Frame, Rims, Chains and Components
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 p-2">
                            <Card bg="dark" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title>Part and Specification</Card.Title>
                                    </div>
                                    <Card.Text>
                                        Choose type of handle bar, frame, level shifter, gear etc
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 p-2">
                            <Card bg="dark" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title>Upgrades</Card.Title>
                                    </div>
                                    <Card.Text>
                                        Extra upgrades on Pedal straps, tires, rim etc
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <Button variant="outline-info">Explore</Button>
                    </div>
                </Container>
            </div>
            <div className="footer pt-5">
                <footer>
                    <Container>
                        <div className="row">
                            <div className="col-6">
                                <div className="text-center">
                                    <h3>Navigate</h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="text-center">
                                    <h3>Connect with Us</h3>
                                </div>
                            </div>
                        </div>

                    </Container>
                </footer>
            </div>

        </div>
    )

}

export default Banner;