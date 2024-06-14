import React from "react";
import Card from "./components/Card/Card";
import CategoriesList from './components/Categories/CategoriesList'
import Enrutador from './Enrutador'


export default function App() {


  return (
    <div className="App">

      <CategoriesList />
      <main className="container">
        <Card />
        <Enrutador />
      </main>

    </div>
  );
}
