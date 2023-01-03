
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import {  Navbar, Nav, Button } from 'react-bootstrap';
import './home.css'
import Logo from './images/logo.jpeg';
import LogoName from './images/logo-name.jpeg';
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
    const copyButton = () =>{ 
        const btn = document.getElementById('button');
        navigator.clipboard.writeText(text);
        if (btn !== null) {
            btn.innerHTML = 'OK!'; 
            setTimeout(() => (btn.innerHTML = 'COPY!'), 1000); 
        }
    }

    const download = () =>{
        let data = {modena:{title :title , text :text}}
        let filename = title +".json"
        const string = JSON.stringify(data)
        const blob = new Blob([string], {type: 'application/json'});
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
        <Navbar collapseOnSelect expand="lg" bg="White" variant="White">
                <Navbar.Brand href="#home">
                    <img
                        height="30"
                        alt="Modena logo"
                        src={Logo}
                    />
                    <img
                        height="15"
                        alt="Modena logo"
                        src={LogoName}
                    />
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

        <Form.Control className="center-block input" type='file' accept=".json" onChange={onFileInputChange}/>

        <div className="center-block">
            <Form.Control  className="title" placeholder="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <hr className="featurette-divider"></hr>
        <Button variant="primary center-block" className="center-block" id="button" onClick={copyButton} >COPY!</Button>
        <div className="center-block">
            <Form.Control as="textarea" rows={6} className="text" placeholder="text" name="" id="" value={text} onChange={(event) => setText(event.target.value)}></Form.Control>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="center-block">
            <Button variant="primary center-block" onClick={download}>Download</Button>
        </div>
        
        </div>
        </>
    );
};

export default Home;