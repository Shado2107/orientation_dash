import { Link } from "react-router-dom";

const Register = () => {
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
                    <form className="bg-white">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome !</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">create your account</p>
                        <div className="flex items-center border-2 py-2 px-12 rounded-2xl mb-4">
                            <input className="pl-2 outline-none border-none" type="texte" name="lastname" id="lastname" placeholder="Votre nom"/>
                        </div>
                        <div className="flex items-center border-2 py-2 px-12 rounded-2xl mb-4">
                            <input className="pl-2 outline-none border-none" type="texte" name="firstname" id="firstname" placeholder="Votre prenom"/>
                        </div>
                        <div className="flex items-center border-2 py-2 px-12 rounded-2xl mb-4">
                            <input className="pl-2 outline-none border-none" type="email" name="email" id="email" placeholder="Votre adresse mail"/>
                        </div>
                        <div className="flex items-center border-2 py-2 px-12 rounded-2xl mb-4">
                            <input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Votre mot de passe"/>
                        </div>
                        <button type="sublit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Créer un compte</button>
                        {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Mot de passe oublié</span> */}
                        <Link to="/" className="text-sm ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">Je me connecte</Link>

                    </form>
                </div>
            </div>
        </div>

        
        </>
    );
};

export {Register};