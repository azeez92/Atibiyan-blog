"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center justify-center items-center ">
        <div className="flex-1">
          <Link
            href="/"
            className="whitespace-nowrap text-4xl 1 font-semibold dark:text-white self-center"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-2 text-white rounded-lg">
              Atibyan
            </span>
            Blog
          </Link>{" "}
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label htmlFor="username" value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label htmlFor="username" value="Your username" />
              <TextInput type="email" placeholder="youremail@gmail.com" id="Email" />
            </div>
            <div>
              <Label htmlFor="username" value="Your username" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className=" mt-5">
            <Button gradientDuoTone="purpleToPink" outline type="submit" className="w-full">
              Continue with Google
        </Button></div>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/signin' className="text-blue-500"> Sign In</Link>

        </div>

      </div>
    </div>
    </div >
  );
}
