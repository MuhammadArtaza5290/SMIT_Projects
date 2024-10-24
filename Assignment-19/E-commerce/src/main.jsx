// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.jsx'
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  
)
