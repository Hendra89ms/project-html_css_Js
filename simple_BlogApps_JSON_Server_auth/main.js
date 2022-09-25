import AddBlog from './src/pages/AddBlog'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import PageNotFound from './src/pages/PageNotFound'
import Register from './src/pages/Register'
import './style.css'

const page = window.location.pathname
const userData = localStorage.getItem('userData')

switch (page) {
  case '/':
    Home()
    break

  case '/login':
    userData ? window.location.href = '/' : Login()
    break

  case '/register':
    userData ? window.location.href = '/' : Register()
    break

  case '/addBlog':
    userData ? AddBlog() : window.location.href = '/login'
    break

  default:
    PageNotFound()
    break
}
