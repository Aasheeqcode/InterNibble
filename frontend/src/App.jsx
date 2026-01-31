import {SignInButton,SignOutButton,UserButton,SignedIn,SignedOut} from "@clerk/clerk-react"
import './App.css'
function App(){
  return(
    <>
    <header>
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