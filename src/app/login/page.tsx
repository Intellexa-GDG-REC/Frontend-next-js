"use client" ;
import Image from 'next/image'
import React from 'react';


export default function Login() {
 // const projectDir = process.cwd(); // Path to the project root
  //loadEnvConfig(projectDir);
    const [isLoading, setLoading] = React.useState(false);
    const onClickLogin = async () => {
      try {
        setLoading(true);
       
        window.location.href = loginbaseurl+"/auth/github";
      } catch (error) {
        console.error("GitHub Login Failed:", error);
      } finally {
        setLoading(false);
      }
    }

  const loginbaseurl = process.env.BASE_PUBLIC_API_URL || 'https://api.gitrecquest.tech' ;
  //console.log(`Secret Key: ${loginbaseurl+"/auth/github/"}`);
    return (
      <main className="flex items-center justify-center p-2 h-screen w-screen animated-background h-screen bg-gradient-to-r from-white via-gray-500 to-blue-500">
      <div className="" >

         {/* GDG Logo Section */}
        
        <div className="absolute top-20 lg:top-0 md:top-0 left-0 p-2 pointer-events-none">
        <Image
      src="/gdg_logo.svg"
      width={200}
      height={200}
      alt="Picture of the author"
       
    />
      </div>
       {/*intellexa Logo Section */}
       <div className="absolute  top-0 right-0 p-2 pointer-events-none">
        <Image
      src="/intellexa_logo.png"
      width={200}
      height={200}
      alt="Picture of the author"
       
    />
      </div>    
        </div>
       
        <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full ">
       
          {/* Logo Section */}
          <div className="flex justify-center mb-6 pointer-events-none">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="h-16 w-16"
            />
          </div>
  
          {/* Heading */}
          <h1 className="text-center text-black text-2xl font-bold mb-4">Login</h1>
  
          {/* Login Button */}
          <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition" onClick={onClickLogin} disabled={isLoading}>
           
           
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.8.5.7 5.6.7 11.9c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.8-1.6-3.8-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2.9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.4.1-3 0 0 1-.3 3.3 1.3.9-.3 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4 2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.7.1 3 .7.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8.3.3.7.9.7 1.8v2.7c0 .4.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.3 5.6 18.2.5 12 .5z" />
              </svg>
              {isLoading ? "Logging in..." : "Login with GitHub"}
            </span>
           
          </button>
        </div>
      </main>
    );
  }

function defineConfig(arg0: { dbCredentials: { connectionString: string; }; }) {
  throw new Error('Function not implemented.');
}
  
