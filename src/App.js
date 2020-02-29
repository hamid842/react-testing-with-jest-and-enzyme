import React from "react";
import "./app.scss";
import Header from "./components/header/index";
import Headline from "./components/headline";

const tempArr = [{
  firstName:'Hamid',
  lastName:'mohamadi',
  age:37,
  email:'mohamadi842@gmail.com',
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
