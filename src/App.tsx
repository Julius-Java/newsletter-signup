import { useState } from "react"
import SignupPage from "./components/SignupPage"
import ThankYouPage from "./components/ThankYouPage"
import pageContext from "./context"


function App() {
  const [nextPage, setNextPage] = useState(false)

  return (
    <>
      <pageContext.Provider value={{setNextPage}}>
        {!nextPage ? <SignupPage/> : <ThankYouPage />}
      </pageContext.Provider>
    </>
  )
}

export default App
