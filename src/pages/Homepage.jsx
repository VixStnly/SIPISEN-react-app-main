
import HeroImage from '../assets/img/slider.png' 
import '../dist/css/main.css'; // Import file CSS untuk styling
import AboutImage from '../assets/img/about.png'
import Team1Image from '../assets/img/service-icon-01.png'
import Team2Image from '../assets/img/service-icon-02.png'
import Team3Image from'../assets/img/service-icon-03.png'
import Team4Image from '../assets/img/service-icon-04.png'
import TopContact from '../assets/img/contact-dec-v3.png'
import FrontImage from '../assets/img/vision.jpeg'
import BackImage from '../assets/img/back.png'
import DesignImage from '../assets/img/design.png'
import AnalystImage from '../assets/img/analyst.png'
import NumberImage from '../assets/img/phone-icon.png'
import MailImage from '../assets/img/email-icon.png'
import LocationImage from '../assets/img/location-icon.png'
import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
import NavbarComponent from "../components/NavbarComponent";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
<div>
  <div className="full-height-container">
    <NavbarComponent/>
    
    <div className="main-banner " id="top" > 
   
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-lg-12" >
                      <h6 data-aos="fade-right" data-aos-duration="1000" >Sistem Informasi</h6>
                    
                      <h2 data-aos="fade-right" data-aos-duration="1000">Aplikasi Absen Dan Piket <br /> <span className='span-smk'>SMKN 1 CIOMAS</span></h2>
                      <p  data-aos="slide-right" data-aos-duration="1000">aplikasi berbasis web yang di buat oleh sekelompok siswa dari SMKN 1 CIOMAS dengan tujuan mempermudah pekerjaan piket dan absensi, aplikasi ini dibuat dengan beberapa rancangan di mulai dari analyst-design-dront end- back end</p>
                      
                    </div>
                    
                    <div className="col-lg-12">
                    <div className="border-first-button">
                    <Link as={Link} to="/Login">SMKN 1 Ciomas</Link> {/* Menggunakan Link untuk navigasi ke halaman login */}
                  </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image wow fadeInRight" data-aos="fade-left" data-aos-duration="1000">
                <img src={HeroImage} alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left-image wow fadeInLeft" data-aos="fade-right" data-aos-duration="1000">
                <img src={AboutImage} alt="hero-img" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6 data-aos="fade-left" data-aos-duration="1000">About Us</h6>
                    <h4 data-aos="fade-left" data-aos-duration="1000">Apa itu aplikasi absensi <em>/ piket?</em></h4>
                    <div className="line-dec"></div>
                  </div>
                  <p data-aos="fade-left" data-aos-duration="1000">
                    Aplikasi ini adalah aplikasi yang digunakan untuk memudahkan pekerjaan guru piket. Aplikasi ini digunakan untuk menginput data absen atau data lainnya yang akan langsung terlihat oleh kepala sekolah.
                  </p>
                  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
            <div id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
              <h6></h6>
              <h4 ata-aos="fade-left" data-aos-duration="1000" >About <em> Team</em></h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="first-thumb active">
                        <div className="thumb" data-aos="fade-right" data-aos-duration="1000" >
                          <span className="icon"><img src={Team1Image} alt="hero-img" data-aos="fade-right" data-aos-duration="1000" />
                          Vision Engineering
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      {/* Render your list items here */}
                      {/* Example for the first item */}
                      <li className="active">
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center" data-aos="fade-right" data-aos-duration="1000" > 
                                <div className="left-text">
                                  <h4 data-aos="fade-left" data-aos-duration="1000" >Apa itu Vision Engineering</h4>
                                  <p>
                                    Vision Engineering adalah Team dari sebuah project uji level. project kali ini yang di buat team Vision Engineering adalah Sistem Informasi Piket Dan Absensi. Tujuan di buatnya aplikasi ini adalah untuk mempermudah Guru Piket.
                                  </p>
                                  
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                <img src={FrontImage} alt="hero-img" data-aos="fade-left" data-aos-duration="1000"  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MDBFooter  className='text-black text-center text-lg-left' id='contact' style={{backgroundColor:'#57D3F8'}}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Vision Engineering</h5>

            <p>
               Aplikasi ini di kembangkan oleh kami Team Vision Enginering yang bertujuan untuk mempermudah sistem piket dan absen di SMK 1CIomas
            </p>
            <div className='logo-footer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg></div>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" style={{marginTop:'30px', marginBottom:'20px'}}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
<h4 style={{fontSize:"15px", color:'white'}}>VisionEnginering@gmail.com</h4>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"  style={{marginTop:'30px', marginBottom:'20px'}}>
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
<h4 style={{fontSize:"15px", color:"white"}}>************</h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright &copy:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          2024-SIPISEN
        </a>
      </div>
    </MDBFooter>
          </div></div></div>
  );
};



export default Homepage;
