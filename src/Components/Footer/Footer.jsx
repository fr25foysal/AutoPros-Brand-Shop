import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="dark:bg-dark-bg bg-base-100 border-t-2 border-yellow ">
        <footer className="footer p-10 max-w-7xl mx-auto dark:text-[#FFF] text-base-content">
          <aside >
            
                <Link to={"/"}>
              <img className="w-44" src="/images/logo.png" alt="Logo" />
            </Link>
            <p>
              AutoPros Industries Ltd.
              <br />
              Providing reliable service since 1992
            </p>
            
            
          </aside>
          <div className="grid grid-cols-3 justify-between w-full">
            <nav className="flex flex-col gap-y-2 ">
              <header className="font-semibold text-base mb-4 uppercase text-yellow">
                Services
              </header>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Branding</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Design</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Marketing</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Advertisement</a>
            </nav>
            <nav  className="flex flex-col gap-y-2 ">
              <header className="font-semibold text-base mb-4 uppercase text-yellow">
                Company
              </header>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">About us</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Contact</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Jobs</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Press kit</a>
            </nav>
            <nav className="flex flex-col gap-y-2 ">
              <header className="font-semibold text-base mb-4 uppercase text-yellow">
                Legal
              </header>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Terms of use</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Privacy policy</a>
              <a className="link link-hover hover:text-yellow transition-colors duration-150 ease-out hover:ease-in">Cookie policy</a>
            </nav>
          </div>
        </footer>
      </div>
    );
};

export default Footer;