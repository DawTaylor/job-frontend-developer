import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-zero/react'

import './index.css'
import 'bulma/css/bulma.css'
import App from './App'
import { Store } from './Store'

const Root = () => (
  <Provider store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
