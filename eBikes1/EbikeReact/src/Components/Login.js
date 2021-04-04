import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import "../App.css";

export default function Login() {


    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    function validateForm() {
        console.log("validate")
        const { email, password } = form
        const errors = {};

        if (!email || email === '')
            errors.email = "Email cannot be blank !";
        
        if(email && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)==null)
            errors.email = "Invalid email id !";

        if (!password || password === '')
            errors.password = "Password cannot be blank !";


        return errors;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        }
    }

    return (
        <div className="Login">
            <div className="login-box">
                <div className="text-center borders">
                    <h2 className="title">Login</h2>
                </div>

                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label className="mt-5">Email</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                autoFocus
                                type="email"
                                onChange={(e) => setField('email', e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
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
                                onChange={(e) => setField('password', e.target.value)}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.password}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Button className="bg-info" block size="lg" type="submit">
                        Login
                    </Button>
                    <div className="text-center mt-5">
                        <h6>Don't have an account yet ?</h6>
                        <Link to="/signup">Create an account</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}