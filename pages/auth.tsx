import Input from "@/components/input";

const Auth = () =>{
    return (
        <div className="relative h-full w-full bg-[url('/img/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/img/logo.png" className="h-12"></img>
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
                        <Input></Input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;