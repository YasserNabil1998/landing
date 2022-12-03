import React from 'react'
import '../Style/Mine.css';

function Mine() {
  return (
    <>
      <section id='mine' >
        <div className="container">
          <div className='creat col-md-12'>
            <h1 className='creat-top'>Create High Quality Explainers
              Faster than any Studio</h1>
            <p className="creat-prgraph">
              An explainer video marketplace for faster and organized production through first-class artists.
            </p>
            <div className="button">
              <button className='bth button-right'>Start Creating</button>
              <button className='bth button-left'>I am an artist</button>
            </div>
            <div className="surch">
              <button className='bth button-surch'>Looking for an artist?</button>
            </div>
          </div>
          <div className="brand">
            <h3>Brands uses explainer videos</h3>
            <div class="grid text-center imgs">
              <img src="../assets/iamges/google.svg" className='google' />
              <img src="../assets/iamges/amazon.svg" className='amazon'/>
              <img src="../assets/iamges/whatsapp.svg" className='whatsapp'/>
              <img src="../assets/iamges/Stripe.svg" className='Stripe'/>
              <img src="../assets/iamges/airbnb.svg" className='airbnb' />
              <img src="../assets/iamges/Vector.svg"className='Vector'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mine