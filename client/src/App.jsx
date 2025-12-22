import {RouterProvider} from 'react-router-dom'
import { router } from '../Components/Router'
import { Provider } from 'react-redux'
import store from '../redux/store'
const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
     <Provider store={store}>
       <RouterProvider router={router} />
     </Provider>
    </div>
  )
}

export default App