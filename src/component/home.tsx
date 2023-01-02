
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import {  Navbar, Nav, Button } from 'react-bootstrap';
import './home.css'
const Home = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");


    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files :File | null= null;
        
        if (e.target.files !== null) {
            files = e.target.files[0];
            let reader = new FileReader();
            
            reader.readAsText(files);
            // @ts-ignore
            reader.onload = function() {
                console.log(reader.result);
                let jsonText :string= ""
                if (typeof reader.result === 'string') {
                    jsonText = reader.result;
                    const arr = JSON.parse(jsonText);
                    console.log(arr.modena.title);
                    setTitle(arr.modena.title);
                    setText(arr.modena.text);
                } else {
                    alert("エラーが発生しました。");
                }
                
                
            };
            
            reader.onerror = function() {
                console.log(reader.error);
            };
        } else {
            alert("エラーが発生しました。");
        }


    };
    
    let data = {modena:{title :title , text :text}}
    let filename = title +".json"
    const download = () =>{
        const string = JSON.stringify(data)
        const blob = new Blob([string], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.download = filename;
        a.href = url;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
    
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                    />
                    SampleApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        <div className="App">

        <Form.Control className="center-block " type='file' accept=".json" onChange={onFileInputChange}/>

        <div className="center-block">
            <Form.Control  className="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div className="center-block">
            <Form.Control as="textarea" rows={3} className="text" name="" id="" value={text} onChange={(event) => setText(event.target.value)}></Form.Control>
        </div>
        <div className="center-block">
            <Button variant="primary" onClick={download}>Download</Button>
        </div>
        
        </div>
        </>
    );
};

export default Home;