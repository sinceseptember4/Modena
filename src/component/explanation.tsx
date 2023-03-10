
import React from "react";
import { Container, Row, Col ,Image} from 'react-bootstrap';
import TitleAndText from './images/titleAndText.png'
import CopyExplanation from './images/copyExplanation.png'
import DownloadExplanation from './images/downloadExplanation.png'

const Explanation = () => {

    return (
        <Container fluid>
        <Row className="d-block mx-auto">
            <Col className="d-flex justify-content-center mt-5">
                <h1>ð°åãã¦ã®æ¹ã¸</h1>
            </Col>
        </Row>
        <Row className="d-block mx-auto" style={{ width: '25rem' }}>
            <Col className="d-flex justify-content-center ">
                <Image className="mt-3 mb-5" src={TitleAndText} fluid />
            </Col>
        </Row>
        <Row className="d-block mx-auto">
            <Col className="d-flex justify-content-center">
                <p>è¨éãã­ã¹ãã¨ãã£ã¿ã¼Modenaã¯æç³»ã®å¤§å­¦çã®å°ã¬ãã¼ãä½æã«ç¹åãããã­ã¹ãã¨ãã£ã¿ã¼ã§ãã
                    <br /> titleã¨ããå¥åæ¬ã«èª²é¡ãæ¸ãåå®¹ã®ã¿ã¤ãã«ãå¥åãã¾ãã
                    <br /> ç¶ãã¦textã«ã¡ã¢ãè¨å¥ãããåå®¹ãæã¡è¾¼ã¿ãæå­æ°å¶éãå å³ãã¦ãªã¢ã«ã¿ã¤ã ã§æå­æ°ãè¡¨ç¤ºãã¦ãã¾ãã
                </p>
                
            </Col>
        </Row>

        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>ã³ãã¼æ©è½</h1>
            </Col>
        </Row>
        <Row className="d-block mx-auto" style={{ width: '45rem' }}>
            <Col className="d-flex justify-content-center">
                <Image className="mt-3 mb-5" src={CopyExplanation} fluid />
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <p>text ã§è¨å¥ããåå®¹ãä»ã®ãµã¤ãã³ãã¼&ãã¼ã¹ããããã¨ãæ³å®ãã¦ãCOPYãã¿ã³ããè¿½å ãã¾ããã
                    <br />ããã¯COPYãã¿ã³ãæ¼ãã¨textã«è¨è¿°ãããåå®¹ãèªåçã«ããã¤ã¹ã®ã³ãã¼æ©è½ã«ä¿å­ããã
                    <br />ãã¼ã¹ãåã§ããã¤ã¹ã®ãã¼ã¹ãæ©è½ãä½¿ç¨ããã¨textã«è¨è¿°ããããã®ããã®ã¾ã¾è¨è¿°ããã¾ãã
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>ãã¦ã³ã­ã¼ãæ©è½</h1>
            </Col>
        </Row>
        <Row className="d-block mx-auto" style={{ width: '45rem' }}>
            <Col className="d-flex justify-content-center ">
                <Image className="mt-3 mb-5" src={DownloadExplanation} fluid />
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <p>è¨å¥ãããã®ãå¥ã®ããã¤ã¹ã§ãä½¿ç¨ãããã¨è¨ãè¦æã«ãå¿ããã¦ãdownloadãã¿ã³ãã¨
                    <br />ããã¡ã¤ã«èª­ã¿è¾¼ã¿ãã¿ã³ããè¿½å ãã¾ããã
                    <br />ãdownloadãã¿ã³ãã¯è¨å¥ããåå®¹ï¼title textã¨ãã«ï¼ãjsonãã¡ã¤ã«ã§ãã³ã­ã¼ããããã¨ãã§ãã¾ãã
                    <br />ï¼ä¾:titleããã¢ãããã®å ´åã®ãã¡ã¤ã«å ãã¢ãã.jsonã ï¼
                    <br />ããã¡ã¤ã«èª­ã¿è¾¼ã¿ãã¿ã³ãã¯ããã¡ã¤ã«ãé¸æããæ¼ããã¨ã§ããã¤ã¹ã®ãã¡ã¤ã«æ©è½ã«é·ç§»ãã¾ãã
                    <br />ãã³ã­ã¼ããããã¡ã¤ã«ãé¸æããã¨ãã®ãã¡ã¤ã«ã«è¨è¼ãã title ã¨ text ãèª­ã¿è¾¼ããã¨ãã§ãã¾ãã
                    <br />å¥ã®ããã¤ã¹åå£«ã§ãå¯è½ã§ãã®éonedrive iCloudãªã©ã®ã¯ã©ã¦ããµã¼ãã¹ã®ä½¿ç¨ãæ¨å¥¨ãã¾ãã
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-5 mb-5">
                <h1>ðlet's happy writing!!ð</h1>
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

export default Explanation;