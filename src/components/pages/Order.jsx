import React from 'react'
import '../Style/Order.css';
function Order() {
  return (
    <>
      <section id='order'>
        <div className="container">
          <div className="orders">
            <div className="row">
              <div className="col-md-6 order-right">
                <h2>Order made simple</h2>
                <div className="list">
                  <div className="listpinsel">
                    <img src="../assets/iamges/Asset-1.svg" className='brooke' />
                    <p>Customaize all stages in your explainer video
                      in about 10 minutes.</p>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "11px" }}>
                    <img src="../assets/iamges/Asset-2.svg" className='brooke' />
                    <p>we giude you step by step customaizing your video with the best options</p>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "18px" }}>
                    <img src="../assets/iamges/Asset-3.svg" className='brooke' />
                    <p>Customize each stage to have a video satisfied your marketing needs</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-left">
                <img src="../assets/iamges/brooke.svg" className='brooke' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Order