import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path: '/',
        element : <Home/>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails/>,
        loader : ()=> fetch('../public/booksData.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
