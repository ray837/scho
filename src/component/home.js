import React, { useEffect ,useState} from "react";

export default function Home() {
    return(<>
 
<div className="w3-top">
  <div className="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" className="w3-bar-item w3-button w3-wide">NATIONAL SCHOLARSHIP PORTAL</a>
    
    <div className="w3-right w3-hide-small">
      <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
      <a href="/apply" className="w3-bar-item w3-button"><i className="fa fa-user"></i> Apply</a>
      <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> </a>
      <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> </a>
      <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
    </div>
  
    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick="w3_open()">
      <i className="fa fa-bars"></i>
    </a>
  </div>
</div>
 
<nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"   id="mySidebar">
  <a href="javascript:void(0)" onClick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="#about" onClick="w3_close()" className="w3-bar-item w3-button">ABOUT</a>
  <a href="#team" onClick="w3_close()" className="w3-bar-item w3-button">Apply</a>
  <a href="#work" onClick="w3_close()" className="w3-bar-item w3-button"></a>
  <a href="#pricing" onClick="w3_close()" className="w3-bar-item w3-button"></a>
  <a href="#contact" onClick="w3_close()" className="w3-bar-item w3-button">CONTACT</a>
</nav>

 
<header className=" w3-display-container w3-grayscale-min" id="home">
    <img src="https://scholarships.gov.in/public/Content/img/slider9.jpg" style={{ marginTop:10}}/>
  <div className="w3-display-left w3-text-white" style={{padding:48}}>
 
    <p><a href="/apply" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Apply Scholarship</a></p>
  </div> 
  <div className="w3-display-bottomleft w3-text-grey w3-large" >
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</header>

 <div className="w3-container" style={{padding:128}} id="about">
  <h3 className="w3-center">ABOUT NSP</h3>
  <p className="w3-center w3-large">Key features </p>
  <div className="w3-row-padding w3-center" style={{marginTop:64}}>
    <div className="w3-quarter">
      <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
      <p className="w3-large">Security</p>
      <p>quick application document storage using ShareX</p>
    </div>
    <div className="w3-quarter">
      <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
      <p className="w3-large">Passion</p>
      <p> Every student counts</p>
    </div>
    <div className="w3-quarter">
      <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
      <p className="w3-large">Design</p>
      <p>user friendly</p>
    </div>
    <div className="w3-quarter">
      <i className="fa fa-cog w3-margin-bottom w3-jumbo"></i>
      <p className="w3-large">Support</p>
      <p>24x7</p>
    </div>
  </div>
 
<div style={{padding:129}}>
    <p>National Scholarships Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled. National Scholarships Portal is taken as Mission Mode Project under National e-Governance Plan (NeGP)

Vision
National Scholarships Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.
This initiative aims at providing a Simplified, Mission-oriented, Accountable, Responsive & Transparent 'SMART' System for faster & effective disposal of Scholarships applications and delivery of funds directly into beneficiaries account without any leakages.

Mission
The Mission Mode Project (MMP) of National Scholarships Portal under the National e-Governance Plan aims at providing common electronic portal for implementing various Scholarships schemes launched by Union Government, State Government and Union Territories across the country.

Objectives
Ensure timely disbursement of Scholarships to students
Provide a common portal for various Scholarships schemes of Central and State Governments
Create a transparent database of scholars
Avoid duplication in processing
Harmonisation of different Scholarships schemes & norms
Application of Direct Benefit Transfer
Benefits
  Simplified process for the students:
  <ol>
<li> All scholarships information available under one umbrella.</li>

<li> Single integrated application for all scholarships</li>

  Improved transparency :<br/>
1: System suggests the schemes for which a student is eligible.<br/>

2: Duplicates can be reduced to the maximum extent<br/>

  Helps in standardisation :<br/>
1: Master data for Institutions and courses at all India level .<br/>

2: Scholarships processing<br/>
</ol>
  Serves as a decision support system (DSS) for Ministries and departments as up-to date information will be available on demand.
  Comprehensive MIS System to facilitate monitoring every stage of Scholarships distribution i.e. from student registration to delivery of funds</p>
</div></div><div class="formbold-main-wrapper">
  </div>

 
    </>);
}