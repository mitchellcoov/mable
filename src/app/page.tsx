'use client'

import Image from "next/image";

import { SingleStar, DoubleStar } from "@/stars";


export default function Home() {
  return (
    <div className="grid place-content-center text-font">
      <h1 className="text-center m-10 mt-28 text-8xl" >mable coovert</h1>
      <div className="flex justify-center">
        <h1 className="text-center m-10 mt-28 text-9xl" >Coming Soon!</h1>
      </div>
    </div>
  );
}


function ProfilePicture() {
  return (
    <div className="relative overflow-visible">
      <SingleStar style="absolute -top-5 left-24" color="lightorange" time={"one"} size={60}/>
      <SingleStar style="absolute bottom-20" color="gold" time="three" size={90} />
      <DoubleStar style="absolute top-36 -right-14" color="lightblue" time={"two"} size={110}/>
      <Image className="" src="/mable_in_frame.png" alt="Close up picture of Mable Coovert." width={600} height={400}/>
      

    </div>
  );
}
