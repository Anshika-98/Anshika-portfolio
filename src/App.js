import React, { useState } from 'react';
import './App.css'; // Import the separate CSS file
import Footer from './footer';
import Number from './number';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { FcBriefcase } from "react-icons/fc";
import Anshika_pdf from './resume/Anshika_CV23.pdf'


const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          style={{ backgroundColor: '#3498db' }}
          onClick={() => handleTabChange('about')}
        >
          About
        </div>
        <div
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          style={{ backgroundColor: '#f1c40f' }}
          onClick={() => handleTabChange('projects')}
        >
          Projects
        </div>
        <div
          className={`tab ${activeTab === 'education' ? 'active' : ''}`}
          style={{ backgroundColor: '#27ae60' }}
          onClick={() => handleTabChange('education')}
        >
          Education
        </div>
        <div
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          style={{ backgroundColor: '#e91e63' }}
          onClick={() => handleTabChange('contact')}
        >
          Contact Me
        </div>
      </div>
      <div className="content-container">
        {activeTab === 'about' && (
          <div>
            <h1>About Section</h1>
            <p classname='align'>Hello I'm Anshika Jain, a recent graduate student. I completed my Masters of Science 
              in Computer Engineering from New York University.
              I'm currently looking for Full-time roles in Data Engineering 
              and Software Engineering fields.
              <ul className='bullet-free-lists'>
              <li>I have previously worked as a Data Engineering Intern
              at Choreograph(WPP).</li>
              <li>I have also served as a Graduate Course assistant for two courses
              namely Deep Learning and Principles of Database Management Systems.</li>
              <li>During my Undergrad, I co-founded a start-up called DETE(Delivering Everything to Everyone)
              which was a e-commerce platfrom to sell local ammenities to people.</li>
              </ul> 
            </p>

            <h1 className='align'> Some Numbers for you!</h1>
            <Number />
            <div className='align'>
            <div className='icons align'>
          <a href="https://www.linkedin.com/in/anshikajain04/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='icon'/>
          </a>
        </div>
        <div className='icons'>
          <a href="https://github.com/Anshika-98" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
        <div className='icons'>

        </div>
        </div>
        </div>
        )}
        {activeTab === 'projects' && (
  <div>
    <h2>Projects Section</h2>
    <div className="photo-grid">
      <div className="photo">
        <img src="/images/bg_3.jpg" alt="Project 1"/>
      </div>
      <div className="photo">
      <img src="/images/Project1.jpg" alt="project 2" />
      </div>
      <div className="photo">
        <img src="/images/bg_3.jpg" alt="Project 3" />
      </div>
      <div className="photo">
        <img src="/images/bg_3.jpg" alt="Project 4" />
      </div>
    </div>
  </div>
)}

        {activeTab === 'education' && (
          <div>
            <h2>Education Section</h2>
            <p>This is the education section content.</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h2>Contact Me Section</h2>
            <p>This is the contact me section content.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
