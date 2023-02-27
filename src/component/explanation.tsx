
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Explanation = () => {

    return (
        <Container fluid>
        <Row>
            <Col className="d-flex justify-content-center mt-5">
                <h1>🔰初めての方へ</h1>
            </Col>
        </Row>
        <Row>
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
        <Row>
            <Col className="d-flex justify-content-center">
                <p>text で記入した内容を他のサイトコピー&ペーストすることを想定して「COPYボタン」を追加しました。
                <br />これはデバイスのコピー機能（pcで言う右クリックで出てくる「コピー」のこと）をより便利にしたものです。
                    <br />これはCOPYボタンを押すとtextに記述された内容が自動的にデバイスのコピー機能に保存され、
                    <br />ペースト先でデバイスのペースト機能を使用するとtextに記述されたものがそのまま記述されます。
                </p>
            </Col>
        </Row>
        </Container>
    );
};

export default Explanation;