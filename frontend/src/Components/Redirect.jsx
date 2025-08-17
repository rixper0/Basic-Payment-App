import { Link } from "react-router-dom";

function RedirectSigninOrUp() {
    return (
        <div className="bg-gray-400 h-screen w-screen flex flex-col items-center ">
            <div className="text-7xl text-center text-black font-bold pt-5 ">
                <p>Payment App</p>
                
            </div>

            <div className="flex flex-row space-x-10 pt-80">
                <p className="hover:text-black hover:underline text-center text-6xl font-bold text-white">
                    <Link to="/signup">Sign Up</Link>
                </p>
                <p className="text-3xl pt-3 text-black font-bold">or</p>
                <p className="hover:text-black hover:underline text-center text-6xl font-bold text-white">
                    <Link to="/signin">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export function OrIn() {
    return <RedirectSigninOrUp />;
}
