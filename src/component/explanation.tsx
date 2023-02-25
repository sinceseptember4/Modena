
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Explanation = () => {

    return (
        <Container fluid>
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>タイトル</h1>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <h1>タイトル</h1>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <h1>タイトル</h1>
            </Col>
        </Row>
        </Container>
    );
};

export default Explanation;