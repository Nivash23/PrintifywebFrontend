import React from 'react'

function Frontpage() {
  return (
      <div id="Frontpagecontainer">
          <div id="head1">Create and sell</div>
          <div id="head2">custom products</div>
          <div id="listofcheckmarks">
              <div>
                  <div><ion-icon name="checkmark-outline"></ion-icon></div>
                  <div>100% Free to use</div>
              </div>
              <div>
                  <div><ion-icon name="checkmark-outline"></ion-icon></div>
                  <div>900+ High-Quality Products</div>
              </div>
              <div>
                  <div><ion-icon name="checkmark-outline"></ion-icon></div>
                  <div>Largest global print network</div>
              </div>
          </div>
          <div id="innerstandworksbuts">
              <button type="button" id="stforfreebut">Start for free</button>
              <button type="button" ><ion-icon name="play-circle"></ion-icon>How it works?</button>
          </div>
          <div id="hopeline">Trusted by over 8M sellers around the world</div>

          <div id="preferencecontainer">
              <div id="box">
                  
              <div class="row">
                  <div class="col-md-3">
                      <div><img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" /></div>
                      <div class="name">Higher Profits</div>
                      <div>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</div>
                  </div>
                  <div class="col-md-3">
                      <div><img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" /></div>
                      <div class="name">Robust Scaling</div>
                      <div>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</div>
                  </div>
                  <div class="col-md-3">
                      <div><img src="https://printify.com/pfh/assets/legacy/best-selection.svg" /></div>
                      <div class="name">Best Selection</div>
                      <div>With 900+ products and top quality brands, you can choose the best products for your business.</div>
                  </div>
              </div>
              </div>
          </div>
    </div>
  )
}

export default Frontpage