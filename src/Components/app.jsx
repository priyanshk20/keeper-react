import React from "react";
import ReactDom from "react-dom";
import Header from "./header";
import Footer from './footer';
import Note from "./note";
import notes from "../notes";




function App() {

 return <div>
        <Header />
        <Footer />
        {notes.map((noteItem) =>
     <Note 
    id= {noteItem.id}
    title= {noteItem.title}
    content= {noteItem.content}
    
    />
  )
}

    
    </div>
}


export default App;