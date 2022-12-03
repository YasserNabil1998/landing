import React from 'react'
import '../Style/Gerard.css';
function Gerard() {
  return (
    <>
      <section id='Gerard'>
        <div className="container">
          <div className="Gerards">
            <div className="row">
              <div className="col-md-6 Gerard-left">
                <img src="../assets/iamges/Gerard.svg" className='brooke' />
              </div>
              <div className="col-md-6 Gerard-right">
                <h2>The finest artists at your disposal</h2>
                <div className="list">
                  <div className="listpinsel">
                    <p>Hire Affordoble or Professional or Creative artists for each stage of your explainer video</p>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "11px" }}>
                    <img src="../assets/iamges/Vector-1.svg" className='brooke' />
                    <span>See artist portfolio before hiring</span>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "5px" }}>
                    <img src="../assets/iamges/Vector-1.svg" className='brooke' />
                    <span>Pay for each stage, No 50% Upfront</span>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "6px" }}>
                    <img src="../assets/iamges/Vector-1.svg" className='brooke' />
                    <span>Choose artist based on speed of delivery</span>
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

export default Gerard