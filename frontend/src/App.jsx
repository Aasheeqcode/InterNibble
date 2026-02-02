import {SignInButton,SignOutButton,UserButton,SignedIn,SignedOut} from "@clerk/clerk-react"
import './App.css'
function App(){
  return(
    <>
    <header>
    <h1>I guess i can found it now why not</h1>
    <SignedIn>
      <SignOutButton/>
      <UserButton/>
    </SignedIn>
    <SignedOut>
      <SignInButton/>
    </SignedOut>
    </header>
    </>
  )
}

export default App;