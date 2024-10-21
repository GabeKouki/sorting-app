import React from "react";
import "./WelcomePage.css";
import { ReactComponent as GithubIcon } from '../Images/GithubIcon.svg'
import { ReactComponent as LinkedInIcon } from '../Images/LinkedIn.svg'
import { ReactComponent as GmailIcon } from '../Images/Gmail.svg'

const WelcomePage = ({ startApp }) => {
  return (
    <div className="welcome-page-container">
      <div className="content-wrapper">
        <section className="introduction-section">
          <h1>Welcome to the Sorting Algorithms Visualizer</h1>
          <p>
            This visualizer helps you understand how sorting algorithms work and compare to each other.
            It's a work in progress, and I welcome your suggestions and ideas. Feel free to reach out via Gmail.
            I'm a junior Computer Science major at Western New England University.
          </p>
          <div className="social-links">
            <a href="https://github.com/GabeKouki" target="_blank" rel="noopener noreferrer"><GithubIcon className="icon"/></a>
            <a href="https://www.linkedin.com/in/gabrielkouki/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="icon" /></a>
            <a href="mailto:gabekjobs@gmail.com" target="_blank" rel="noopener noreferrer"><GmailIcon className="icon" /></a>
          </div>
        </section>

        <section className="usage-section">
          <h2>How to Use</h2>
          <ol>
            <li>Select a sorting algorithm from the dropdown menu.</li>
            <li>Adjust the array size using the slider.</li>
            <li>Click 'Generate New Array' to create a random set of data.</li>
            <li>Use the 'Sort Speed' slider to control the visualization speed.</li>
            <li>Press 'Start Sorting' to begin the visualization.</li>
            <li>Watch the bars reorganize as the algorithm sorts the data.</li>
            <li>Compare different algorithms by repeating the process.</li>
          </ol>
        </section>

        <div className="button-container">
          <button onClick={startApp} className="start-button">Take me there!</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
