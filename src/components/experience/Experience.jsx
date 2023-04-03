import './Experience.css'

const Qualifications = () => {

  return (
    <section className="qualification section">
        <h2 className="section__title">Experience</h2>

        <div className="qualification__container container">
          <div className="qualification__sections">


              <div className="qualification__content qualification__content-active">
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web Developer</h3>
                    <span className="qualification__subtitle">Engausa</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      2020 - 2021
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">React Developer</h3>
                    <span className="qualification__subtitle">Trek</span>

                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - 2023
                    </div>
                  </div>

                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Freelance Developer</h3>
                    <span className="qualification__subtitle">
                        Fiverr
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      2021 - PRESENT
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

              </div>
          </div>
        </div>
    </section>
  )
}

export default Qualifications