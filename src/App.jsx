import './App.css'
import EventDetails from './pages/EventDetails/EventDetails'
import FilterEvents from './pages/FilterEvents/FilterEvents'
import EventList from './pages/EventList/EventList'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

const router =createBrowserRouter([
  {path:'/', element:<EventList/> },
  {path:'/find-events', element:<FilterEvents/>},
  {path:'/events/:id', element:<EventDetails/>}
])
const App = () => {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
