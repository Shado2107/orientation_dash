
const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
            
              <a href="" className="text-xl font-bold flex items-center lg:ml-2.5">
                <img src="" className="h-6 mr-2" alt="Logo"/>
                <span className="self-center whitespace-nowrap">Or</span> 
              </a>
           
            </div>
            <div className="flex items-center">
                <div className="hidden lg:flex items-center">
                  
                
                </div>
              </div>
          </div>
        </div>
      </nav>
    );
};

export {Navbar};