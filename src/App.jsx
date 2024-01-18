import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./features/ui/Home"
import AppLayout from "./features/ui/AppLayout"
import TotalStatsScreen from "./features/ui/TotalStatsScreen"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="stats" element={<TotalStatsScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

