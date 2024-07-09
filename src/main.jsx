import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Example from './login.jsx'
import Example2 from './footer.jsx'
import Example3 from './newsletter.jsx'
import Example4 from './hero.jsx'
import Example5 from './body.jsx'
import Example6 from './testmonials.jsx'
import Example7 from './team.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Example4/>
    <Example5/>
       <Example7/>
     <Example6/>
    <Example/>
    <Example2/>
    <Example3/>
  </React.StrictMode>,
)
