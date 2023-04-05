
import React, { useState , useEffect } from "react";
import Axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './home.css'

const Home = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [count, setCount] = useState("");
    const url = "https://american-joke.net/sucuderia/index.php"

    //起動時のlocalStorageから情報を取り出す処理。
    useEffect(() => {
        const value1 = localStorage.getItem('title');
        if (typeof value1 === 'string') {
            setTitle(value1);
        } 
        const value2 = localStorage.getItem('text');
        
        if (typeof value2 === 'string') {
            
            setText(value2);
        }
        
    },[]) 
    
    //常時localStorageから情報を取り出す処理。
    useEffect(() => {
        const textCount = text.replace(/\r?\n/g,"").length;
        setCount(textCount + "文字");
        localStorage.setItem('text', text);
    },[text]) 

    useEffect(() => {
        localStorage.setItem('title', title);
    },[title]) 

    //json ファイルを読み込むための処理
    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files :File | null= null;
        
        if (e.target.files !== null) {
            files = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(files);
            reader.onload = function() {
                console.log(reader.result);
                let jsonText = ""
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
    //コピーボタンの処理
    const copyButton = () =>{ 
        const btn = document.getElementById('button');
        navigator.clipboard.writeText(text);
        if (btn !== null) {
            btn.innerHTML = 'OK!'; 
            setTimeout(() => (btn.innerHTML = 'COPY!'), 1000); 
        }
    }
    //ファイルのアップロード
    const upload = (title: string , text: string)  =>{
        Axios.post(url, {
            "title" :title ,
            "text" :text
        }).catch(err => {
            console.log(err); 
        });
    }
    //downloadボタンの処理
    const download = () =>{
        const data = {modena:{title :title , text :text}}
        const filename = title +".json"
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
        upload(title, text)
    }
    
    return (
        <>
            <div className="App">
                <Form.Control className="center-block input" type='file' accept=".json" onChange={onFileInputChange}/>
                <Form.Control  className="title" placeholder="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <hr className="featurette-divider"></hr>
                <Button variant="primary center-block" className="center-block" id="button" onClick={copyButton} >COPY!</Button>
                <Form.Control as="textarea" rows={6} className="text" placeholder="text" name="" id="" value={text} onChange={(event) => setText(event.target.value)}></Form.Control>
                <p>{count}</p>
                <hr className="featurette-divider"></hr>
                <Button variant="primary center-block" onClick={download}>Download</Button>
            </div>
        </>
    );
};

export default Home;