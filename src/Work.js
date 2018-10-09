import React from "react";


const Work = () => (
  <main className="container">
    <div>
      <h1>Work</h1>
    </div>
    <div class="work">
      <div class="work__item">
        <div className="work__image-container">
          <a href="http://revolve.com/" target="blank">
            <img className="work__image" src="./revolve.png" alt="Screenshot of Revolve Website" />
          </a>
        </div>
      </div>
      <div class="work__item">
        <div className="work__image-container">
          <a href="http://fwrd.com/">
            <img className="work__image" src="./fwrd.png" alt="Screenshot of Fwrd Website" />
          </a>
        </div>
      </div>
      <div class="work__item">
        <div className="work__image-container">
          <a href="http://americanapparel.com/">
            <img className="work__image" src="./american-apparel.png" alt="Screenshot of American Apparel Website" />
          </a>
        </div>
      </div>
    </div>
  </main>);

export default Work;
