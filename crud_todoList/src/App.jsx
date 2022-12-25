import { Routes, Route } from 'react-router-dom'
import AddTodo from './components/todo/AddTodo'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AddTodo />} />
    </Routes>
  )
}

export default App
