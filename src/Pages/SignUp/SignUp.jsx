import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash,FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { useProvider } from "../../Provider/UniProvider/UniProvider";


const SignUp = () => {
  const {createUser,successNotify,googleSign,UpdateUser,errMsg,setErrMsg} = useContext(useProvider)
    const [show, setShow] = useState(true)
    const navigate = useNavigate()
    const handlePassShow=()=>{
        setShow(!show)
    }

    const handleGoogleLogin= ()=>{
      setErrMsg('')
      googleSign()
      .then(data=>{
        console.log(data.user);
        
        successNotify('SignUp Successful')
        navigate('/')
      })
      .catch(e=>setErrMsg(e.message))
    }

    const handleSubmit= e =>{
      setErrMsg('')
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const photo = form.photo.value
      const email = form.email.value
      const password = form.password.value

      if (password.length < 6) {
        return setErrMsg("Password can't be less than 6 characters")
      }
      else if (!/^(?=.*?[A-Z])/.test(password)) {
      setErrMsg( "Password must contain at least 1 uppercase letter")
      return
      }
      else if (!/.*?[#?!@$%^&*-]/.test(password)) {
        return setErrMsg('Password must contain at least 1 special characters')
      }

      createUser(email,password)
      .then(data=>{
        console.log(data.user);
        UpdateUser(name,photo)
        .then(()=>{
          successNotify('SignUp Successful')
           navigate('/')
        })
        .catch(e=> setErrMsg(e.message))
      })
      .catch(e=>setErrMsg(e.message))
    }

    // Clear Set Error
    const handleClearErr =()=>{
      setErrMsg('')
    }
    return (
      <div className="bg-[url(/images/loginBg.jpg)] bg-error bg-cover bg-center">
        <div className="grid justify-center py-14 dark:text-white rounded-sm">
          <div className="relative flex flex-col dark:bg-dark-bg bg-white shadow-md px-6 py-10">
            <div className="flex">
              <button
                onClick={handleGoogleLogin}
                className="flex justify-center border-[3.2px] rounded-none hover:bg-transparent hover:text-yellow  border-yellow ease-linear duration-200 w-full py-3 px-6 text-center align-middle font-bold uppercase"
              >
                <FaGoogle className="text-xl mr-3 "></FaGoogle> Continue with
                google
              </button>
            </div>
            <div className="divider w-1/2 mx-auto">OR</div>
            <h4 className="block text-center  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Enter your details to register.
            </h4>
            <div className="divider h-1 mt-1 bg-yellow w-28 mx-auto"></div> 
            <p className="mt-1 text-center block  text-base font-normal leading-relaxed text-gray-700 antialiased"></p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="name"
                    required
                    type="text"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    required
                    type="text"
                    name= 'photo'
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Photo URL
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="email"
                    required
                    type="email"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type={show ? "password" : "text"}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="password"

                    required
                  />
                  {show ? (
                    <FaEyeSlash
                      onClick={handlePassShow}
                      className="absolute top-[14px] right-4"
                    ></FaEyeSlash>
                  ) : (
                    <FaEye
                      onClick={handlePassShow}
                      className="absolute top-[14px] right-4"
                    ></FaEye>
                  )}

                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-700 checked:bg-gray-700 checked:before:bg-gray-700 hover:before:opacity-10"
                    id="checkbox"
                    required
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-light text-gray-700"
                  htmlFor="checkbox"
                >
                  <p className="flex items-center  text-sm font-normal leading-normal text-gray-700 antialiased">
                    I agree the
                    <a className="font-medium transition-colors hover:text-gray-700">
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                </label>
              </div>

              <div className="form-control">
              <button
                    className="border-[3.2px] rounded-none bg-yellow hover:bg-transparent hover:text-yellow  border-yellow ease-linear duration-200 w-full py-3 px-6 text-center align-middle font-bold uppercase"
                    type="submit"
                  >
                    Sign Up
              </button>
              </div>
              {/* errr message will be here {errmsg} */}
              <p className="text-[#ff5858] mt-3 text-center">{errMsg}</p>

              <p className="mt-4 block text-center  text-base font-normal leading-relaxed text-gray-700 antialiased">
                Already have an account?
                <Link onClick={handleClearErr}
                  className="font-semibold hover:text-yellow ml-1 transition-colors text-blue-700"
                  to={"/sign-in"}
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
          
        </div>
      </div>
    );
};

export default SignUp;