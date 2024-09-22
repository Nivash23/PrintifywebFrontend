import React, { useState } from 'react'
import '../style/index.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Frontpage from '../Components/Frontpage'

function App() {
  const [workdrpstate, setWorkdrpstate] = useState('Winactive');
  const [servicedrpstate, setServicedrpstate] = useState('Sinactive');
  const [casedrpstate, setCasedrpstate] = useState('Cinactive');
  const [helpdrpstate, setHelpdrpstate] = useState('Hinactive');
  return (
    <div id="body">
      <div id="Navigation">
        <div id="logo">
          <div>Printify</div>
        </div>
        <div id="menus">
          <div>Catalog</div>
          <div class="drop" id="drp1" onMouseEnter={() => { setWorkdrpstate('Wactive') }} onMouseLeave={()=>{setWorkdrpstate('Winactive')}}>How it works<div ><ion-icon name="caret-down-outline" id="dropicon1"></ion-icon></div></div>
          <div>Pricing</div>
          <div>Blog</div>
          <div class="drop" id="drp2" onMouseEnter={() => { setServicedrpstate('Sactive') }} onMouseLeave={()=>{setServicedrpstate('Sinactive')}}>Services<div ><ion-icon name="caret-down-outline"  id="dropicon2"></ion-icon></div></div>
          <div class="drop" id="drp3" onMouseEnter={() => { setCasedrpstate('Cactive') }} onMouseLeave={()=>{setCasedrpstate('Cinactive')}}>Use-cases<div><ion-icon name="caret-down-outline"  id="dropicon3"></ion-icon></div></div>
          <div class="drop" id="drp4" onMouseEnter={() => { setHelpdrpstate('Hactive') }} onMouseLeave={()=>{setHelpdrpstate('Hinactive')}}>Need help?<div><ion-icon name="caret-down-outline"  id="dropicon4"></ion-icon></div></div>
        </div>
        <div id="logbuts">
          <button type="button">Log in</button>
          <button type="button" id="signupbut">Sign up</button>
        </div>
      </div>
      <div  class={workdrpstate}>
        <div id="workdrpcontainer" onMouseEnter={() => { setWorkdrpstate('Wactive') }} onMouseLeave={()=>{setWorkdrpstate('Winactive')}}>
          
        <div>How Printify Works</div>
        <div>Print On Demand</div>
        <div>Printify Quality Promise</div>
        <div>What to Sell?</div>
       </div>
      </div>
      <div  class={servicedrpstate}>
        <div id="servicedrpcontainer" onMouseEnter={() => { setServicedrpstate('Sactive') }} onMouseLeave={()=>{setServicedrpstate('Sinactive')}}>
          
        <div>Printify Studio</div>
        <div>Printify Express Delivery</div>
        <div>Transfer Products</div>
        <div>Order In Bulk</div>
        <div>Experts Program</div>
       </div>
      </div>
      <div  class={casedrpstate}>
        <div id="casedrpcontainer" onMouseEnter={() => { setCasedrpstate('Cactive') }} onMouseLeave={()=>{setCasedrpstate('Cinactive')}}>
          
        <div>Merch for Fans</div>
        <div>Merch for eCommerce</div>
        <div>Merch for Enterprises</div>
        <div>Grow Your Store</div>
       </div>
      </div>
      <div  class={helpdrpstate}>
        <div id="helpdrpcontainer" onMouseEnter={() => { setHelpdrpstate('Hactive') }} onMouseLeave={()=>{setHelpdrpstate('Hinactive')}}>
          
        <div>Help Center</div>
        <div>Contacts</div>
        <div>My Requests</div>
        
       </div>
      </div>
      <div id="innerbody">
        <Router>
          <Routes>
            <Route path="/" element={<Frontpage/>}  />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App