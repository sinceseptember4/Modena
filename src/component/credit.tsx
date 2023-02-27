
import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
const Credit = () => {

    return (
        <Container fluid>
        
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>クレジット</h1>
            </Col>
        </Row>
        <Col className="d-flex justify-content-center mt-5">
                <p>所属  所有
                    
                    
                </p>
                
            </Col>
        <Row>
            <Col className="d-flex justify-content-center mt-2">
                <p>同朋大学コンピューターサークル
                    
                    
                </p>
                
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <p>企画 制作
                    
                    
                </p>
                
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-2">
                <p>岡田芳規  木藤翔太</p>
                
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <p>作成環境
                    
                    
                </p>
                
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-2">
                <p>React Typescript react-bootstrap vscode AWS PHP</p>
                
            </Col>
        </Row>
        <footer>
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center mt-5">
                        <p>&copy; D-coding</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </Container>

    );
};

export default Credit;