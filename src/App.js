import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {

  let [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    border: '1px solid #E5DBC6',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    backgroundColor: '#265742',
    color: '#E5DBC6',
  };

  const formStyle = {
    backgroundColor: '#265742',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '50px'
  };

  const submitStyle = {
    // border:'1px solid #E5DBC6',
    padding: '20px',
    borderRadius: '10px',
    color: 'black',
    backgroundColor: '#9EDC72',
    width: '100%',
    textAlignment: 'center'
  };

  const labelStyle = {
    color: '#ACBBB4',
    // fontSize: '24px',
  }

  const legendStyle = {
    color: '#ACBBB4',
    // fontSize: '36px',
    width: '30%',
  }

  const headerStyle = {
    backgroundColor: '#265742',
    color: '#ACBBB4',
    textAlign: 'center',
  }

  const fieldsetStyle = {
    padding: '60px',
  }

  return (
    <>
      <h1 style={headerStyle}>Your Feedback Matters...</h1>
      <form style={formStyle}>
        <fieldset style={fieldsetStyle}>
          <legend style={legendStyle}>Feedback</legend>
          <label htmlFor="fname" style={labelStyle}>First name:</label><br />
          <input type="text" id="fname" name="fname" style={inputStyle} required={true} /><br />
          <label htmlFor="lname" style={labelStyle}>Last name:</label><br />
          <input type="text" id="lname" name="lname" style={inputStyle} required={true} /><br /><br />
          <a href="http://localhost:3000/">
            <button type="submit" onClick={() => {
              setSubmitted(() => true);
              const fname = document.getElementById('fname').value;
              const lname = document.getElementById('lname').value;

              if (!!fname && !!lname) {
                axios.post('http://localhost:8000/email/verify', {
                  fname,
                  lname
                })
                  .then(res => {
                    window.location.reload();
                  })
                  .catch(
                    console.log
                  )
              }
            }} style={submitStyle}>Submit</button>
            {/* {{
              if(submitted) {
                <>
                  <p>Thank You For your Feedback!!!</p>
                </>
              }
            }} */}
          </a>
        </fieldset>
      </form>
    </>
  );
}

export default App;
