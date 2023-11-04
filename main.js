import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'

const currentDate = dayjs().format('MMM D, YYYY');
console.log('Todays date: ${currentDate}');

const a = startDate("2023-09-05");
const daysDifference = dayjs().diff(startDate, 'day');
console.log('Number of days since Sept 5, 2023: ${daysDifference}');


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2>Today's date: ${dayjs().format('MMM D, YYYY')}</h2>
    <h2>${startDate()}.toNow()</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
