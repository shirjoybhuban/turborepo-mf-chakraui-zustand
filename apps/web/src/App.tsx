import React from "react";
// import { Link } from "ui";
import "./App.css";
import { AppShell } from "ui";

import CardList from "./components/CardList";
// @ts-ignore
import CheckList from "docs/CheckList";

function App() {

  return (
    <div className="App">

      
      <AppShell title="Web" colorScheme="light" routes={[{
        path:'/',
        element:CardList
      },{
        path:'/product',
        element:CheckList
      }]} />
    </div>
  );
}

export default App;
