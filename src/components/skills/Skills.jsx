import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i class="bx bxl-html5"></i>
                <div>
                  <h3 className="skills__name">HTML</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-css3"></i>
                <div>
                  <h3 className="skills__name">CSS</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-javascript"></i>
                <div>
                  <h3 className="skills__name">Javascript</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-react"></i>
                <div>
                  <h3 className="skills__name">React</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-redux"></i>
                <div>
                  <h3 className="skills__name">Redux</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-tailwind-css"></i>
                <div>
                  <h3 className="skills__name">Tailwind</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-bootstrap"></i>
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bxl-git"></i>
                <div>
                  <h3 className="skills__name">Git</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
