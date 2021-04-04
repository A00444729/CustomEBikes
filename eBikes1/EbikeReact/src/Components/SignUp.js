import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import "../App.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <div className="login-box">
                <div className="text-center borders">
                    <h2 className="title">Register</h2>
                </div>

                <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="name">
                        <Form.Label className="mt-5">Name</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                autoFocus
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <FontAwesomeIcon icon={faKey} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group size="lg" controlId="confirm_password">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <FontAwesomeIcon icon={faKey} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="password"
                                value={confirm_password}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Button className="bg-info" block size="lg" type="submit" disabled={!validateForm()}>
                        Sign Up
                    </Button>
                    <div className="text-center mt-5">
                        <h6>Existing User ?</h6>
                        <Link to="/signup">Login</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}