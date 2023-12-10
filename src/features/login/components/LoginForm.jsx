import { Link } from "react-router-dom";



const LoginForm = () => {
    return (
        <form className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

        
        <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
        <div className="flex items-center border-2 py-2 px-12 rounded-2xl mb-4">
             <input className="pl-2 outline-none border-none" type="email" name="name" id="name" placeholder="Votre adresse mail"/>
        </div>
       

        <div className="flex items-center border-2 py-2 px-12 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Votre mot de passe"/>
        </div>


        <button type="sublit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Je me connecte</button>


        <Link to="/register" className="text-sm ml-2 text-gray-500 hover:text-blue-500 cursor-pointer">Créer un compte</Link>

    </form>
    );
};

export {LoginForm};