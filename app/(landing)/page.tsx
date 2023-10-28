import { Button } from "@/components/ui/button";


 
import Link from "next/link";
const LandingPage =()=> {
    return (
   <div className="mb-8 space-y-4 center">
    <h1 className="text-2xl font-bold text-center">알잘딱에 오신것을 환영합니다!</h1>
    <div className="text-center space-x-3">
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