import Image from "next/image";
import React from "react";
import person1 from "@/public/images/person.png";
import google from "@/public/images/google.png";
import phone from "@/public/images/call-calling.png";

function login() {
	return (
		<div className="flex justify-center items-center mt-20 ">
			<div className="w-[60%] border-2 border-solid border-gray-400 border-opacity-30 flex items-center gap-8 rounded-xl bg-gray-50 ">
				<div>
					<Image
						src={person1}
						alt="person"
						width={400}
						height={550}
						className="p-2"
					/>
				</div>
				<form className="w-[400px]">
					<p className="text-center text-4xl">GreeNet</p>
					<div className="w-full mx-auto">
						<div className="flex flex-col gap-3">
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-sm">
									Email
								</label>
								<input
									type="email"
									className="p-2 rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="text-sm">
									Password
								</label>
								<input
									type="password"
									className="p-2 rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
								/>
							</div>
						</div>
						<div className="text-green-500 underline text-sm text-end hover:text-green-400 hover:no-underline pt-2 pb-4 ">
							Forget password?
						</div>
						<button className="bg-green-500 text-white w-full p-2 rounded-lg text-lg font-semibold hover:bg-green-400">
							Login
						</button>
						<div className="flex justify-center items-center pt-3">
							<div className="border-t-2 border-gray-500 w-36 mt-1"></div>
							<div className=" border-2 border-solid border-gray-500 rounded-full w-10 text-center">
								Or
							</div>
							<div className="border-t-2 border-gray-500 w-36 mt-1"></div>
						</div>
						<div className="flex flex-col items-center gap-2 pt-3">
							<button className="flex items-center  bg-gray-800 text-white w-full p-2 rounded-lg hover:text-gray-400 hover:bg-gray-700">
								<Image
									src={phone}
									alt="cell phone icon"
									width={20}
									height={20}
									className="ml-5 "
								/>
								<p className="text-center w-full">Continue with Phone number</p>
							</button>
							<button className="flex items-center  border-2 border-solid border-gray-500 w-full p-2 rounded-lg hover:text-gray-400">
								<Image
									src={google}
									alt="google icon"
									width={20}
									height={20}
									className="ml-5"
								/>
								<p className="text-center w-full">Continue with Google</p>
							</button>

							<div className="flex justify-center text-sm gap-2">
								<p>Don&apos;t have Account yet?</p>
								<div className="text-green-400 underline hover:no-underline hover:text-green-300  ">
									SignUp
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default login;
