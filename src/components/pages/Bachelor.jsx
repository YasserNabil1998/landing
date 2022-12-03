import React from 'react'
import '../Style/Bachelor.css';
function Bachelor() {
  return (
    <>
      <section id='Bachelor'>
        <div className="container">
          <div className="Bachelors">
            <div className="row">
              <div className="col-md-6 Bachelor-right">
                <h2>Goodbye meetings</h2>
                <div className="list">
                  <div className="listpinsel">
                    <p>No more time wasted on
                      meetings. Start creating your video.
                      Right now. Right here.</p>
                  </div>
                  <div className="listpinsel" style={{ marginTop: "12px", marginLeft: "-17px" }}>
                  <button className='btn start'>Start Creating</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 Bachelor-left">
                <img src="../assets/iamges/Bachelor.svg" className='brooke' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bachelor
