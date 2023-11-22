
import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Thank() {


  const location = useLocation();
  const email = location.state;
  console.log(email);
  return (
    <div className="flex justify-center">
      <div className=' w-1/3  pt-8 mb-[22rem] flex flex-col items-start gap-8'>
      <h1 className="text-5xl">Thank you</h1>
      <h4>you're now registred for wizard teck</h4>
      <h4>we've sent more deatil to <span className="font-bold">{email}</span></h4>
      </div>
    </div>
  )
}