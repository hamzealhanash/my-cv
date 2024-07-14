(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();document.querySelector("#app").innerHTML=`
<div class="w3-content w3-margin-top" style="max-width:1400px;">
  <div class="w3-row-padding">
  
    <div class="w3-third">
   
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
            <h2 class="w3-container w3-text-black">Hamza AlHanash</h2>  
        </div>
        <div class="w3-container">
          <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Web App Dev / IT</p>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Damascus, SY</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>hamzaalhanash2005@gmail.com</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>0981133701</p>
          <hr>

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <p>NetWorking -<p>2.5y</p></p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>
          </div>
          <p>JS - 3.5y</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:85%">85%</div>
          </div>
          <p>OS Engineering - 1.5y</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:85%">85%</div>
          </div>
          <p>React.JS - 3y</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">
              <div class="w3-center w3-text-white">80%</div>
            </div>
          </div>
              <p>Cybersecurity - 1y</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:70%">70%</div>
          </div>
          <p>UI-UX - 1y</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>
          </div>
          <br>

          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <p>Arabic</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%">
            <div class="w3-center w3-text-white">100%</div>        
            </div>
          </div>
          <p>English</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:90%">
                <div class="w3-center w3-text-white">90%</div>
            </div>
          </div>
          <br>
        </div>
      </div><br>
    </div>

    <div class="w3-twothird">
     <div class="w3-container w3-card w3-white w3-margin-bottom">
       <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Previous Project</h2>
       <div class="w3-container">
         <h5 class="w3-opacity"><b>Front End Developer / EREB.sy</b></h5>
         <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2024 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
         <p>a university project the evolved to be a full web app, it's having a fully functional Login/Sing up page with a way to authenticate users 
         using a local database and a home page.</p>
         <hr>
       </div>
       <div class="w3-container">
         <h5 class="w3-opacity"><b>network engineer / LFC</b></h5>
         <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Dec 2022 - Apr 2024</h6>
         <p>LFC or Linking Far Company are a project that it's main goal to link to company away from each other safely using some security protocols
         which include upgrading the firewalls and upgrading the firmware of devices which help with fixing some CVEs and adding more security tools like vpn,proxy-chain and more</p>
         <hr>
       </div>
      
      </div>

      <div class="w3-container w3-card w3-white">
       <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
       <div class="w3-container">
         <h5 class="w3-opacity"><b>Damascus Network Engineering degree</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2024</h6>
         <p></p>
         <hr>
       </div>
       <div class="w3-container">
         <h5 class="w3-opacity"><b>Foundational C# with Microsoft</b></h5>
         <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>DEC 2022 - JAN 2023</h6>
         <hr>
       </div>
       <div class="w3-container">
         <h5 class="w3-opacity"><b>Front End Development Libraries / freecodecamp.org</b></h5>
         <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2021 - 2022</h6>      
         <br>
      </div>
     </div> 
    </div>
  </div>
  
</div>
`;
