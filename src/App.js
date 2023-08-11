import React from "react";
import Nav from "../src/Components/Nav";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import sectionData from "./Datas/sectionData";

const App = () => {
  return (
    <div>
      <Nav />
      <AboutMe />
      {sectionData.map((element) => {
        return <Section title={element.title} desc={element.desc} />;
      })}
      <Footer />
    </div>
  );
};
export default App;
