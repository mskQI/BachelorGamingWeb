import React from 'react';


function Home() {
    return (
        <div>  
             <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-20">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                   
                                    
                                    <img src="assets/images/Logo.png" alt="" style={{height: "70px", width: "140px" }}/>
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Search End ***** */}
                                <div className="search-input">
                                <form id="search" action="#">
                                    <input type="text" placeholder="Type Into Me" id='searchText' name="searchKeyword" onkeypress="handle" />
                                    <i className="fa fa-search"></i>
                                </form>
                                </div>
                                {/* ***** Search End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><a href="index.html">Play Modes</a></li>
                                    <li><a href="browse.html">Create Room</a></li>
                                    <li><a href="details.html">Find Room</a></li>
                                    <li><a href="streams.html">Features</a></li>
                                    <li><a href="profile.html">Rules <img src="assets/images/5guys.png" alt=""/></a></li>
                                </ul>   
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
    </div>
  </header>  

      <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">

        {/* ***** Banner Start ***** */}
<div className="main-banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <img src="assets/images/Colourguys.png" alt="Colourguys" style={{ height: "auto", width: "100%" }} />
      </div>
      <div className="col-lg-7 d-flex align-items-center">
        <div className="header-text">
          <h2>Afterlife Adventures</h2>
          <h4><em>Browse</em> Afterlife Adventures</h4>
          <div className="main-button">
            <a href="browse.html">Play after Death</a>
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
                    <div class="item">
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



     
      </div>
    )
}

export default Home;