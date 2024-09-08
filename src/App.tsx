import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'

export default function App() {
  return (
    <Routes>
      <Route  path="/" element={<Pages.Home />} />
    </Routes>
  )
}
