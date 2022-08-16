import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Name /> */}
    {/* <Message /> */}
    <ContainerSample />
  </React.StrictMode>
)
