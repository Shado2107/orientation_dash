import { LoginForm } from "../../../features/login";


const Login = () => {
    return (
        <>
        <div className="" style={{ background: "#edf2f7" }}>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to bg-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">Orentation App</h1>
                        <p className="text-white mt-1"> The most popular peer to peer lending at SEA</p>
                        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read more</button>
                        
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                   

                    <LoginForm/>


                </div>
            </div>
        </div>

        </>
    );
};

export {Login};