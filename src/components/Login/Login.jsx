import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authService from '../../../appwrite/auth';
import Input from '../Input';
import { authLogin } from '../../store/authSlice';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createacc = async (data) => {
        try {
            console.log('Form data:', data);
    
            // Attempt login
            let session;
            try {
                const email = data.email
                const password = data.password
                session = await authService.login({email, password});
                console.log('Session after login attempt:', session);
    
                if (!session) {
                    console.log('No session found, creating account...');
                    await authService.createAccount(data);
                    session = await authService.login(data);  // Attempt to login again after account creation
                }
            } catch (loginError) {
                console.warn('Login failed, creating account...', loginError);
                await authService.createAccount(data);
                session = await authService.login(data);  // Attempt to login again after account creation
            }
    
            // Fetch current user and navigate
            const userData = await authService.getCurrentUser();
            if (userData) {
                dispatch(authLogin(userData));
                navigate('/'); // Navigate to home
                // Avoid full reload if possible, rely on React's state management
            }
        } catch (error) {
            console.error('Error during login or account creation:', error);
            // Consider setting an error state to inform the user
        }
    };
    

    return (
        <div className='p-12 scale-95 mt-7 w-fit rounded-lg bg-neutral-300  m-auto'>
            <form className="container mx-auto  border-2 rounded-lg " onSubmit={handleSubmit(createacc)}>
                <div className="flex justify-center my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center  lg:p-12">
                        <div className="flex flex-col items-center ">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                            <p className="mb-4 text-grey-700">Enter your email and password</p>
                            <button
                                type="button"
                                className="flex items-center justify-center  py-4 px-4  text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google logo" />
                                Sign in with Google
                            </button>
                            <div className="flex items-center mb-3">
                                <hr className="h-0 border-2 border-solid border-grey-500 grow" />
                                <p className="mx-4 text-grey-600">or</p>
                                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                            </div>
                            <label htmlFor="name" className='mb-2 font-bold text-md text-grey-900'>Name</label>
                            <input type="text" id="name"
                                placeholder="Enter Your name"
                                className="flex items-center border-2 w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                {...register("name", {
                                    required: "name is required",
                                    maxLength: 200,
                                    minLength: 1
                                })}
                            />
                            <label htmlFor="email" className="mb-2 font-bold text-md text-grey-900">Email <span className='text-red-500'>*</span></label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="mail@loopple.com"
                                className="flex items-center border-2 w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Email address must be a valid address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-600">{errors.email.message}</span>}

                            <label htmlFor="password" className="mb-2 font-bold text-md text-grey-900">Password <span className='text-red-500'>*</span></label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter a password"
                                className="flex items-center w-full border-2 px-5 py-4 mb-5 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                {...register("password", {
                                    required: "Password is required",
                                    maxLength: 20,
                                    minLength: 4
                                })}
                            />
                            {errors.password && <span className="text-red-600">{errors.password.message}</span>}

                            <div className="flex flex-row justify-between mb-8">
                                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                    <input type="checkbox" className="sr-only peer" />
                                </label>
                                <a href="/forgot-password" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
                            </div>
                            <button className="sign-in w-full px-6 border-2 py-5  text-sm font-bold  transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
