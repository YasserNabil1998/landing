import React from 'react'
import '../Style/Stock.css';

function Stock() {
  return (
    <>
      <section id='Stock'>
        <div className="container">
          <div className="Stocks">
            <div className="row">
              <div className="col-md-6 Stock-left">
                <img src="../assets/iamges/Stock.svg" className='brooke' />
              </div>
              <div className="col-md-6 Stock-right">
                <h2>All in one platform</h2>
                <div className="list">
                  <div className="listpinsel">
                    <p>Payments, artists, adjustments, files and all things releated to your marketing videos, are in one place</p>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "26px", marginLeft: "-32px" }}>
                    <button className='btn start'>See a demo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stock
