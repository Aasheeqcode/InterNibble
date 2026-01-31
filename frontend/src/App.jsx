import {SignInButton,SignOutButton,UserButton,SignedIn,SignedOut} from "@clerk/clerk-react"
import './App.css'
/**
 * Render the app header with authentication controls.
 *
 * The header displays a SignOutButton and UserButton when a user is signed in,
 * and a SignInButton when no user is signed in.
 * @returns {JSX.Element} A React element containing the authentication header.
 */
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