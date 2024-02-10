
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserProvider'

function App() {
 

  return (
    <UserContextProvider>
     <h1>react with chai</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
