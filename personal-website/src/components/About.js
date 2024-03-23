import React from "react";
import AdityaProfile from "./AdityaProfile.jpg";

function About() {
  return (
    <div className="fixed w-full h-screen flex items-center justify-center  text-white bg-black">
      <div className="flex flex-row gap-[50px]">
        <div className="flex flex-col gap-11 ml-10">
          <h1 className="mt-10 text-5xl">My name is Aditya</h1>
          <p className="w-3/4">
            Aspiring Software Engineering Student at Ontario Tech University who
            has a passion for coding and developing applications
          </p>
        </div>

        <img
          className="w-3/12 h-3/12 rounded-lg"
          src={AdityaProfile}
          alt="Aditya"
        />
      </div>
    </div>
  );
}

export default About;
