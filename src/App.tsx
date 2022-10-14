import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './navigation/AppRouter'
import { store } from './redux/store'


function App() {

  React.useEffect(() => {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]))
    }
  }, [])
  
  return (
    <Provider store={store}>
      <div className=''>
      <AppRouter />

      </div>
    </Provider>
  )
}

export default App
