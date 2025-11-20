export default function PersonPage() {
  return (
    <div id="contactAndPersonInfoDiv">
      <div id="personInfo">
        <h2>Person info</h2>

        <div id="personInfoDetails">
          {/* ----- paste your original details ----- */}
          <span id="spanInfo">Name:</span> Your Name<br />
          <span id="spanInfo">Role:</span> Your Role<br />
          {/* … etc … */}
        </div>

        <p id="personInfoDescription">
          {/* ----- paste your original description ----- */}
        </p>
      </div>
    </div>
  );
}