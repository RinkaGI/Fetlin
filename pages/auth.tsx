import Input from "@/components/input";
import { useState, useCallback } from 'react';
import axios from 'axios';

const Auth = () =>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('');

    const toggleVariant= useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, [])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email, name, password
            })
        } catch (error) {
            console.error(error);
        }
    }, [email, name, password])

    return (
        <div className="relative h-full w-full bg-[url('/img/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/img/logo.png" className="h-12"></img>
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Login' : 'Create an account'}
                        </h2>

                        {variant === 'register' && (
                            <Input
                                label = "Username"
                                onChange={(ev) => setName(ev.target.value)}
                                id = "name"
                                value = {name}
                            ></Input>
                        )}

                        <Input
                            label = "Email"
                            onChange={(ev) => setEmail(ev.target.value)}
                            id = "email"
                            type = "email"
                            value = {email}
                        ></Input>

                        <Input
                            label = "Password"
                            onChange={(ev) => setPassword(ev.target.value)}
                            id = "password"
                            type = "password"
                            value = {password}
                        ></Input>

                        <button onClick={register} className="bg-red-600 py-3 text-white rounded-md mt-3 hover:bg-red-700 w-full transition">
                            Login
                        </button>

                        <p className="text-neutral-500 mt-8">
                            {variant === 'login' ? 'First time using Fetlin?' : 'Do you have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline curson-pointer">
                            {variant === 'login' ? 'Create an account' : 'Login to your account'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;