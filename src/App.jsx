import { useRef } from 'react';
import './index.css';
import { FaPhone, FaWhatsapp } from "react-icons/fa";

function App() {

  const phoneNumber = "+995511407855";

  return (
    <div id='VisualizationDiv'>
      <div id="mainDiv">
        <header id='header'>
          <img src="/siteIcon.jpeg" width={100} id='siteIcon' alt="Site Icon"/>
          <h1 id='headerTitle'>Example Title</h1>
        </header>
        <div id='contentDiv'>
          <div id='contactAndPersonInfoDiv'>
            <div id="contactInfo" > 
              <h2>კონტაქტი</h2>
              <div id="contactInfoButtons">
                <a href={`tel:${phoneNumber}`}>
                  <button className="call-btn">
                    <FaPhone /> +995 511 407 855
                  </button>
                </a>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank">
                  <button className="whatsapp-btn">
                    <FaWhatsapp /> WhatsApp
                  </button>
                </a>
              </div>

            </div>
            <div id="personInfo">
              <h2>ექთანი – ნათია ბირჭაძე</h2>

              <div id="personInfoDetails">
                <p><span id='spanInfo'>გამოცდილება:</span> 16 წელი</p>
                <p><span id='spanInfo'>ასაკი:</span> 40 წელი</p>
              </div>

              <p id="personInfoDescription">
                ნათია ბირჭაძე არის სერტიფიცირებული და მაღალი პასუხისმგებლობის მქონე ექთანი,
                რომელსაც აქვს მრავალწლიანი პრაქტიკა კლინიკურ და საავადმყოფო გარემოში.
              </p>
            </div>
            
          </div>
                    <div id='someDiv1'>
            <div id='mainInfoDiv'>
              <h1 id='aboutUsTitle'>ჩვენს შესახებ</h1>

              <div id='aboutUsTextDiv'>
                <p id='aboutUsText'>
                  ჩვენი მიზანია, რომ კლინიკაში მისვლის გარეშე,
                  საკუთარ სახლში მიიღოთ უსაფრთხო და პროფესიონალური სამედიცინო მოვლა.
                  მოვემსახურებით თბილისის მასშტაბით,
                </p>
                <p id='aboutUsText'>
                  ყველა პროცედურას ასრულებს სერტიფიცირებული და გამოცდილი ექთანი,
                  რომელიც მუშაობს სტანდარტული ასეპტიკისა და ჰიგიენის წესებით.
                </p>

                <div id='aboutUsTable'>
                  <p>ჩვენთვის მთავარი არის:</p>
                  <div id='liDiv'>
                    <ul>
                      <li>პაციენტის უსაფრთხოება</li>
                      <li>სუფთა და სწორი პროცედურა</li>
                      <li>პატივისცემა და კომფორტი</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
