import './App.css';
import axios from 'axios';
import ThankYou from './thankYou';

function App() {
  const rating = new window.URLSearchParams(window.location.search).get('value');
  if (!localStorage.getItem('rating')) {
    axios.post('http://localhost:8000/email/rating', {
    rating
  })
  .then(res => {
    localStorage.setItem('rating', true);
  })
  .catch(console.log);
  }

  const sendFeedback = () => {
    const feedback = document.getElementById('feedback').value;
      
    axios.post('http://localhost:8000/email/feedback', {
      feedback
    })
    .then(res => {
      document.getElementById('main').remove();
      console.log('After success');
      const h2 = document.createElement('h2')
      h2.textContent = 'Thanks, we really appreciate your feedback.';
      h2.className = 'thank-you';
      document.getElementById('root').appendChild(h2);
      localStorage.setItem('feedback', true);
    })
    .catch(console.log);
  }

  if(!!localStorage.getItem('feedback')) {
    return (<ThankYou/>);
  } else {
    return (
      <>
        <header id="header">
          <img src="https://dcx14qs33eg2z.cloudfront.net/uploads/production/logos/8035546a-1af1-45a6-a671-dc0ae73b4724/resized_Logo_1_2-to-1_aspect_ratio.png" alt="Gnome" width="250px" height="65px"/>
        </header>
        <main id="main">
          <h2 className='h2'>Thank you! Is there anything else you'd like to <br/> share with the gnomes?</h2>
          {/* <h2 className='h2'>share with gnomes?</h2> */}
  
          <textarea id="feedback" cols={60} rows={7} >
          </textarea>
          <button id="button" onClick={() => sendFeedback()}>Submit</button>
        </main>
      </>
    );
  }
}

export default App;
