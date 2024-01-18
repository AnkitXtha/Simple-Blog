import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import { Provider } from 'react-redux'
import store from './state/index.tsx'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ToastContainer
      autoClose={3000}
      hideProgressBar={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
    />
    <RouterProvider router={router} />
    </PersistGate>
</Provider>,
)
