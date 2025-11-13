import { useRef } from 'react';
import './index.css';

function App() {
  const personInfoRef = useRef(null);
  const contactInfoRef = useRef(null);

  const handleNavigation = (section) => {
    const ref = section === 'personInfo' ? personInfoRef : contactInfoRef;
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id='VisualizationDiv'>
      <div id="mainDiv">
        <header id='header'>
          <img src="/siteIcon.jpeg" width={100} id='siteIcon' alt="Site Icon"/>
          <h1 id='headerTitle'>Example Title</h1>
        </header>
        <div id='contentDiv'>
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
          <div id='contactAndPersonInfoDiv'>
            <div id="personInfo" ref={personInfoRef}>
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
            <div id="contactInfo" ref={contactInfoRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
