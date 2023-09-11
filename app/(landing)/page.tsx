import { Button } from "@/components/ui/button";


 
import Link from "next/link";
const LandingPage =()=> {
    return (
   <div>LandingPage(Unprotected)
    <div>
        <Link href="/sign-in">
        <Button variant="default">
            Login
        </Button>
        </Link>
        <Link href="/sign-up">
        <Button variant="default">
            Register
        </Button>
        </Link>

    </div>
   </div>)
  }
  export default LandingPage;