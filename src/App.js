import React from "react";
import Navbar from "./component/Navbar";
import Intro from "./page/Intro";
import How from "./page/How";
import From from "./page/Form";
// import Example from "./page/Example";
import Question from "./page/Question";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <How />
      <From />
      {/* <Example /> */}
      <Question />
      <Footer />
    </div>
  );
};

export default App;
