import { useState } from "react"
import SignupPage from "./components/SignupPage"
import ThankYouPage from "./components/ThankYouPage"
import pageContext from "./context"


function App() {
  const [nextPage, setNextPage] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  return (
    <>
      <pageContext.Provider value={{setNextPage, setUserEmail}}>
        {!nextPage ? <SignupPage/> : <ThankYouPage emailAddress={userEmail} />}
      </pageContext.Provider>
    </>
  )
}

export default App
