import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const HomePage = ({ onStartGame }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedOption, setSelectedOption] = useState('Quick match');

  const handleStartGame = () => {
    if (selectedOption) {
        onStartGame(selectedOption);
    }
  };


    return (
        <div>   
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-content">

                {/* ***** Banner Start ***** */}
                <div className="main-banner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="header-text" style={{width: "450px"}}>
                          <h2>Afterlife Adventures</h2>
                          <h4>A <em>journey</em> of a lifetime twice!</h4>
                          <div className="main-button">
                            <a  onClick={handleStartGame}>Play now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ***** Banner End ***** */}

                {/* ***** Most Popular Start ***** */}
                  <div class="most-popular">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="heading-section">
                          <h4><em>New RPG Game</em> Play Now</h4>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-sm-6">
                            <div class="item column">
                            <img src="assets/images/Logo.png" alt="" style={{height: "100px", width: "150px" }}/>
                              <h4>Afterlife Adventures<br/><span>JKM Gaming</span></h4>
                              <ul>
                                <li><i class="fa fa-star"></i> 4.8</li>
                                <li><i class="fa fa-download"></i> 2.3M</li>
                              </ul>
                            </div>
                          </div>
                          </div>  
                      </div>
                    </div>
                  </div>
                  {/* ***** Most Popular End ***** */}

                

                
                </div>
              </div>
            </div>
          </div>
          <Footer/>



     
      </div>
    )
}

export default HomePage;