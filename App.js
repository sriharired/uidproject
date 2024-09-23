import React, { useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const technologies = [
  {
    name: 'React',
    icon: 'react.png',
    description: 'A JavaScript library for building user interfaces.'
  },
  {
    name: 'JavaScript',
    icon: 'js.png',
    description: 'A versatile programming language for web development.'
  },
  {
    name: 'HTML5',
    icon: 'html-5.png',
    description: 'The standard markup language for creating web pages.'
  },
  {
    name: 'CSS3',
    icon: 'css-3.png',
    description: 'A style sheet language used for describing the look of a document.'
  },
  {
    name: 'Node.js',
    icon: 'nodejs.png',
    description: 'A JavaScript runtime built on Chrome\'s V8 engine.'
  },
];

function App() {
  const [presentSec, setpresentSec] = useState(0);
  const [isScroll, setisScroll] = useState(false);
  const [SButton, setSButton] = useState(false);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [bgColor, setBgColor] = useState('#000000');
  
  // Define thresholds for touch events
  const touchSensitivity = 50;
  let startTouchY = 0;
  let endTouchY = 0;

  const sectionBackgroundColors = [
    '#000000', // Section 0 (default black)
    '#556B2F', // Section 1
    '#3357FF', // Section 2
    '#800020', // Section 3
    '#C2B280'  // Section 4
  ];

  const handle_scroll = (event) => {
    if (isScroll) return;
    setisScroll(true);

    if (event.deltaY > 0) {
      setpresentSec((prev) => Math.min(prev + 1, 4));
    } else {
      setpresentSec((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => setisScroll(false), 1000);
  };

  const handle_down = (event) => {
    if (isScroll) return;
    setisScroll(true);

    if (event.key === 'ArrowDown') {
      setpresentSec((prev) => Math.min(prev + 1, 4));
    } else if (event.key === 'ArrowUp') {
      setpresentSec((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => setisScroll(false), 1000);
  };

  const handleTouchStart = (event) => {
    startTouchY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    endTouchY = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (isScroll) return;
    setisScroll(true);

    const distance = startTouchY - endTouchY;

    if (distance > touchSensitivity) {
      setpresentSec((prev) => Math.min(prev + 1, 4));
    } else if (distance < -touchSensitivity) {
      setpresentSec((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => setisScroll(false), 1000);
  };

  const scrollToTop = () => {
    setpresentSec(0);
  };

  const handle_menu_click = (index) => {
    setpresentSec(index);
  };

  useEffect(() => {
    window.addEventListener('wheel', handle_scroll);
    window.addEventListener('keydown', handle_down);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handle_scroll);
      window.removeEventListener('keydown', handle_down);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isScroll]);

  useEffect(() => {
    document.getElementById(`section-${presentSec}`).scrollIntoView({
      behavior: 'smooth',
    });

    setBgColor(sectionBackgroundColors[presentSec]);

    if (presentSec > 0) {
      setSButton(true);
    } else {
      setSButton(false);
    }
  }, [presentSec]);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSection2Visible(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const observer3 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSection3Visible(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (section2Ref.current) {
      observer2.observe(section2Ref.current);
    }

    if (section3Ref.current) {
      observer3.observe(section3Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer2.unobserve(section2Ref.current);
      }

      if (section3Ref.current) {
        observer3.unobserve(section3Ref.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <Menu on_menu_click={handle_menu_click} presentSec={presentSec} />
      <div className="sec">
        <div id="section-0" className="section">
          <video autoPlay muted loop className="video-background">
            <source src={`${process.env.PUBLIC_URL}/Section-0.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <h6>Exploring Mythological Characters of Indian History</h6>
            <p className='course'>User Interface Design</p>
          </div>
        </div>

        <div id="section-1" className="section" style={{ backgroundColor: '#556B2F' }}>
          <div className="team-container">
            <div className="team-card professional-card">
              <div className="card-content">
                <img src={`${process.env.PUBLIC_URL}/member1.jpg`} className="team-img" alt="Team Member 1"/>
                <h3>Srinivas Amla</h3>
                <p>Role: Full Stack Java Developer </p>
                <p>Expertise: Html, Css, Js, Java, UI/UX Design</p>
              </div>
            </div>
            
            <div className="team-card professional-card">
              <div className="card-content">
                <img src={`${process.env.PUBLIC_URL}/member2.jpg`} className="team-img" alt="Team Member 2"/>
                <h3>Putha Sri Hari Reddy</h3>
                <p>Role: Front End Developer</p>
                <p>Expertise: Leadership, React, Html, Css, Js, Python</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="section-2"
          ref={section2Ref}
          className={`section ${isSection2Visible ? 'animate-section-2' : ''}`}
          style={{ backgroundColor: '#3357FF' }}
        >
          <h6 className="section-heading"> Exploring Mythological Characters of Indian History </h6>
          <div className=''>
            <div className="project-description-container" >
              <div className="project-image">
                <img
                  src={`${process.env.PUBLIC_URL}/karna.png`}
                  alt="Karna"
                />
              </div>
              <div className="project-description-content">
                <p className='project-description'>
                  The intention of this project is to investigate and evaluate important mythical figures found in Indian epics such as the Puranas, the Ramayana, and the Mahabharata. 
                  This focuses on comprehending the moral principles, cultural relevance, and symbolism embodied by figures such as Draupadi, Shiva, Parvati, Rama, Krishna, Arjuna, and others. 
                  The project aims to provide a more profound knowledge of India's unique mythological past by highlighting how these figures have affected Indian history, traditions, and morals through a combination of textual research, art, and multimedia storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="section-3"
          ref={section3Ref}
          className={`section ${isSection3Visible ? 'animate-section-3' : ''}`}
          style={{ backgroundColor: '#800020' }}
        >
          <div className="problem-statement-container">
            <div className="problem-statement-content">
              <h6>Problem Statement</h6>
              <p className='problemstatement'>
                Many individuals lack a complete knowledge of Indian mythology's rich background due to broken information and current misinterpretations. 
                This online project seeks to build an interesting, visually appealing platform for exploring and presenting significant mythological figures and stories from Indian epics such as the Mahabharata, Ramayana, and Puranas. 
                The website's interactive design, multimedia storytelling, and educational information will make this history more accessible and relevant, increasing users' understanding of the cultural and historical relevance of these mythical individuals.
              </p>
            </div>
          </div>
        </div>

        <div id="section-4" className="section" style={{ backgroundColor: '#C2B280' }}>
          <div className="technologies-container">
            <h2 className="technologies-title">Technologies Used</h2>
            <div className="technologies-list">
              {technologies.map((tech, index) => (
                <div key={index} className="technology-card">
                  <div className="technology-card-inner">
                    <div className="technology-card-front">
                      <img
                        src={`${process.env.PUBLIC_URL}/${tech.icon}`}
                        alt={`${tech.name} icon`}
                        className="technology-icon"
                      />
                      <p className="technology-name">{tech.name}</p>
                    </div>
                    <div className="technology-card-back">
                      <p className="techname">{tech.name}</p>
                      <p>{tech.description}</p>
                    </div> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>  

      {SButton && (
        <button className="floating-button" onClick={scrollToTop}>
          <div className="arrow-icon"></div>
        </button>
      )}

      <footer
        className="footer"
        style={{ backgroundColor: bgColor }}
      >
        <div className="footer-content">
          <p> &copy; 2024 Mythology Project. All Rights Reserved.</p>
          <p>Designed and Developed by Srinivas Amla & Putha Sri Hari Reddy</p>
        </div>
      </footer>
    </div>
  );
}

const Menu = ({ on_menu_click, presentSec, backgroundColor }) => {
  return (
    <div className="menu" style={{ backgroundColor }}>
      <div className={`menu-item ${presentSec === 0 ? 'active' : ''}`} onClick={() => on_menu_click(0)}>
        Title
      </div>
      <div className={`menu-item ${presentSec === 1 ? 'active' : ''}`} onClick={() => on_menu_click(1)}>
        Team Members
      </div>
      <div className={`menu-item ${presentSec === 2 ? 'active' : ''}`} onClick={() => on_menu_click(2)}>
        Project Description
      </div>
      <div className={`menu-item ${presentSec === 3 ? 'active' : ''}`} onClick={() => on_menu_click(3)}>
        Problem Statement
      </div>
      <div className={`menu-item ${presentSec === 4 ? 'active' : ''}`} onClick={() => on_menu_click(4)}>
        Technologies
      </div>
    </div>
  );
};

export default App;
