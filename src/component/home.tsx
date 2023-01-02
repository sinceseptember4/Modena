//import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
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
    
// @ts-ignore
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
        <input type='file' onChange={onFileInputChange}/>
        <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        <div className="App">
            <textarea name="" id=""
        value={text}
        onChange={(event) => setText(event.target.value)}></textarea>
      
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={download}></button>
    </div>
        </>
    );
};

export default Home;