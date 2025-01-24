"use client";

export function AuthPage({ isSignin } : {
    isSignin: boolean
}) {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-4 m-2 bg-white text-slate-900 rounded text-center">
            <h2 className="text-2xl mb-4">{isSignin ? "Signin" : "Signup"}</h2>
            <div>
                <input  className="mb-4 border border-gray-200 p-2 rounded-md" type="text" placeholder="Email" />
            </div>
            <div>
                <input  className="mb-4 border border-gray-200 p-2 rounded-md" type="password" placeholder="Password" />
            </div>

            <div className="text-center text-slate-50 p-2 border bg-slate-700 rounded-md">
                <button onClick={() => {}}>{isSignin ? "Signin" : "Signup"}</button>
            </div>
        </div>
    </div>
}