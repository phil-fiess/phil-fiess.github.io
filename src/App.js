import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Footer from './components/footer';
import Contact from './components/contact';
import Resume from './components/resume';

// Couldn't get react-scroll to work with MDL elements, so using native JS for scroll effect 
function scrollToItem(selector) {

  const item = document.querySelector(selector);

  if (selector === "#resume-offset"){
    item.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });    
  }
  else {
    item.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}

function App() {

  return (
    <div className="App">
      <div className="demo-big-content">
          <Layout>
          <Header className="header-color" title={"Phil Fiess - Portfolio"} scroll>
                  {/* I couldn't get react-scroll to work, so I'm just using native JS to achieve the scroll effect */}
                  <Navigation>
                        <li onClick={function(e){
                          e.preventDefault();
                          scrollToItem("#aboutme");
                        }}>About Me</li>
                        <li onClick={function(e){
                          e.preventDefault();
                          scrollToItem("#resume-offset");
                        }}>Resume</li>
                      <li onClick={function(e){
                        e.preventDefault();
                        scrollToItem("#contact");
                      }}>Contact</li>
                  </Navigation>
              </Header>

              <Content>
                  <div className="page-content">
                    <LandingPage />
                    <div style={{height: '400px'}} />
                    <AboutMe />
                    <div className="parallax-1" />
                    <div id="resume-offset" style={{height: '70px', background: 'white'}} />
                    <Resume />
                    <div className="parallax-2" />
                    <Contact />
                    <Footer />
                  </div>
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
