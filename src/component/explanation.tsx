
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
                <h1>🔰初めての方へ</h1>
            </Col>
        </Row>
        <Row className="d-block mx-auto" style={{ width: '25rem' }}>
            <Col className="d-flex justify-content-center ">
                <Image className="mt-3 mb-5" src={TitleAndText} fluid />
            </Col>
        </Row>
        <Row className="d-block mx-auto">
            <Col className="d-flex justify-content-center">
                <p>計量テキストエディターModenaは文系の大学生の小レポート作成に特化したテキストエディターです。
                    <br /> titleという入力欄に課題や書く内容のタイトルを入力します。
                    <br /> 続いてtextにメモや記入したい内容を打ち込み、文字数制限も加味してリアルタイムで文字数を表示しています。
                </p>
                
            </Col>
        </Row>

        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>コピー機能</h1>
            </Col>
        </Row>
        <Row className="d-block mx-auto" style={{ width: '45rem' }}>
            <Col className="d-flex justify-content-center">
                <Image className="mt-3 mb-5" src={CopyExplanation} fluid />
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <p>text で記入した内容を他のサイトコピー&ペーストすることを想定して「COPYボタン」を追加しました。
                    <br />これはCOPYボタンを押すとtextに記述された内容が自動的にデバイスのコピー機能に保存され、
                    <br />ペースト先でデバイスのペースト機能を使用するとtextに記述されたものがそのまま記述されます。
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>ダウンロード機能</h1>
            </Col>
        </Row>
        <Row className="d-block mx-auto" style={{ width: '45rem' }}>
            <Col className="d-flex justify-content-center ">
                <Image className="mt-3 mb-5" src={DownloadExplanation} fluid />
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <p>記入したものを別のデバイスでも使用したいと言う要望にお応えして「downloadボタン」と
                    <br />「ファイル読み込みボタン」を追加しました。
                    <br />「downloadボタン」は記入した内容（title textともに）をjsonファイルでダンロードすることができます。
                    <br />（例:titleが「モデナ」の場合のファイル名 「モデナ.json」 ）
                    <br />「ファイル読み込みボタン」は「ファイルを選択」を押すことでデバイスのファイル機能に遷移します。
                    <br />ダンロードしたファイルを選択するとそのファイルに記載した title と text を読み込むことができます。
                    <br />別のデバイス同士でも可能でその際onedrive iCloudなどのクラウドサービスの使用を推奨します。
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center mt-5 mb-5">
                <h1>🎉let's happy writing!!🎊</h1>
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