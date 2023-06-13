import React from "react";
// import { Link } from "ui";
import "./App.css";
import { AppShell } from "ui";
import CheckList from "./components/Checklist";
// @ts-ignore
import Movies from "web/Movies";


function App() {
  return (
    <div className="App"><AppShell title="Docs" colorScheme="light" routes={[{
        path:'/',
        element:Movies
      },{
        path:'/product',
        element:CheckList
      }]} />
    </div>
  );
}

export default App;
