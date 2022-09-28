import React, { memo } from 'react'
import './About.css'

export const IndexAbout = () => {
  return (
    <section className="about section section-content" id="about">
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row"> 
        <div className="about-content padd-15">
          <div className="row">
            <div className="about-text padd-15">
              <h3>I'm Lailatul Fitriyah and <span>Front-end Developer</span></h3>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptas a cum, amet eos sapiente ipsa doloribus tenetur aspernatur vitae molestiae perspiciatis explicabo quis nemo deleniti sequi fugit animi ut!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="personal-info padd-15">
              <div className="row">
                <div className="info-item padd-15">
                  <p>Birthday: <span>6 Januari 2006</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Age: <span>19</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Github: <span>https://github.com/fitri612</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Email: <span>lailatulfitriyah9216@gmail.com</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Degree: <span>Engineers</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Phone: <span>089555456222</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>City: <span>Semarang </span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Facebook: <span><a href="https://www.facebook.com/profile.php?id=100008697874354">Fitri Fitri</a></span></p>
                </div>
              </div>
              <div className="row">
                <div className="buttons padd-15">
                  <a href="./files/CV-HoangVanLuan.pdf" className="btn" download="proposed_file_name">Dowload CV</a>
                  <a href="#contact" className="btn hire-me">Hire me</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="education padd-15">
              <h3 className="title">Education</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2015 - 2017
                      </h3>
                      <h4 className="timeline-title">
                        junior High School Gubug 1
                      </h4>
                      <p className="timeline-text">
                        <p>SMP NEGERI 1 GUBUG is an educational unit with a junior high school level in Kuwaron, Kec. Gubug, Kab. Grobogan, Central Java.</p>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2017 - 2020
                      </h3>
                      <h4 className="timeline-title">
                        Senior High School Texmaco
                      </h4>
                      <p className="timeline-text">
                        <p> Texmaco Vocational School Semarang is one of the educational institutions belonging to the Texmaco Center for the Development of Science and Technology (YPPIT) which was established in 1997. </p>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2020 - now
                      </h3>
                      <h4 className="timeline-title">
                        Dian Nuswantoro University
                      </h4>
                      <p className="timeline-text">
                        <p>Dian Nuswantoro University is one of the private higher education institutions accredited A in Semarang</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export const About = memo(IndexAbout)