import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Page from './components/ContextSample';
import Counter from './components/ContextSample';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Name /> */}
    {/* <Message /> */}
    <Counter initialValue={3} />
  </React.StrictMode>
)
