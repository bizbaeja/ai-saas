"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// Assume 'useAuth' is a custom hook for authentication context


const LandingPage = () => {
    const router = useRouter();

        const handleLogin =  ()=> {
            if(window.location.pathname === "/sign-in" || window.location.pathname === "/sign-up"){
              router.push("/dashboard");
            }
          
        }


    return(
     
    
        <div className="h-full flex flex-col items-center justify-center space-y-6 p-8 mx-auto bg-rose-100">
        <div className='flex items-center gap-x-7 hover:opacity-75 transition '>
         
            <div className="ml-[50px]">
                <p className='text-xl font-bold '>알잘딱</p>
                <p className='text-xs text-muted-foreground hover:text-rose-300'>AI prompt service</p>
            </div>
            <Link href="/sign-in">
        <Button variant="default" onClick={handleLogin}>
            Login
        </Button>
        </Link>
        <Link href="/sign-up">
        <Button variant="default" onClick={handleLogin}>
            Register
        </Button>
      
         </Link>
        </div>
        <Image className="ml-[40px] p-12 rounded-full" src="/octopus.gif" width={300} height={300} alt="demo" />
        </div>

    )
   
}

export default LandingPage;


// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// import { useAuth } from "@/app/hooks/use-auth";

// import  { Poppins } from 'next/font/google'

// const font = Poppins({
//     subsets: ['latin'],
//     weight: ["200","300","400","500","600", "700","800"],
// })

// const LandingPage =()=> {
//     const { user, isAuthenticated } = useAuth();
//     const router = useRouter();

//     // Redirect to dashboard if user is authenticated
//     useEffect(() => {
//         if (isAuthenticated) {
//             router.push('/dashboard');
//         }
//     }, [isAuthenticated, router]);
//     return(
     
    
//         <div className="h-full flex flex-col items-center justify-center space-y-6 p-8 mx-auto bg-rose-100">
//         <div className='flex items-center gap-x-7 hover:opacity-75 transition '>
         
//             <div className="ml-[50px]">
//                 <p className='text-xl font-bold '>알잘딱</p>
//                 <p className='text-xs text-muted-foreground hover:text-rose-300'>AI prompt service</p>
//             </div>
//             <Link href="/sign-in">
//         <Button variant="default">
//             Login
//         </Button>
//         </Link>
//         <Link href="/sign-up">
//         <Button variant="default">
//             Register
//         </Button>
      
//          </Link>
//         </div>
//         <Image className="ml-[40px] p-12 rounded-full" src="/octopus.gif" width={300} height={300} alt="demo" />
//         </div>

//     )
   
   

// //    <div className="mb-8 space-y-4 center mt-10">
// //     <h1 className="text-2xl font-bold text-center">알잘딱에 오신것을 환영합니다!</h1>
// //     <div className="text-center space-x-3">


// //     </div>
// //    </div>
//             }
//   export default LandingPage;