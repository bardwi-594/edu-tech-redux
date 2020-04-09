import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div class="wrapper help_section">
        <div class="container">
          <div class="text_container">
            <h3>Welcome</h3>
            <h1 class="heading">
              How can We <br /> help You
            </h1>
            <p>
              Our help center can instantly give you answers to <br /> many
              frequently asked questions.
            </p>
            <div class="input_container">
              <input
                type="text"
                class="input help_text_input"
                placeholder="What can we help you with"
              />
              <span class="ico">ICO</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
