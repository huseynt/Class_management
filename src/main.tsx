// -------------------- Import style ---------------------
import './index.css'
// -------------------- Import React ---------------------
import React from 'react'
import ReactDOM from 'react-dom/client'
// -------------------- Import App ---------------------
import App from './App.tsx'
// -------------------- Import Redux ---------------------
import { Provider } from 'react-redux'
import {store} from './redux/index.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
