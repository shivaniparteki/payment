import { useState } from "react";
import { Money } from "../widgets/Money";
import { Login } from "./Login";
import { PayMethods } from "./PayMethods";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";

export const Payment = () => {
  const [isDropDown, setIsDropDown] = useState(false)

  const handleDropDown = () => {
    setIsDropDown(!isDropDown)
  }

  return (
    <>
      <div className="wrapper m-5 position-relative  d-flex flex-column m-auto mt-5 align-items-center justify-content-center border text-center" style={{ maxWidth: "300px", backgroundColor: "#58228C", borderRadius: "14px", minHeight: "50px" }}>
        <div className="w-100 d-flex align-items-center justify-content-between text-white px-3 pt-2 pb-4" style={{ paddingTop: "0px" }}>
          <HiOutlineArrowNarrowLeft style={{ fontSize: "20px" }} />
          <p className="m-0" style={{ fontSize: "20px" }}>Payment</p>
          <HiDotsHorizontal onClick={handleDropDown} style={{ fontSize: "20px" }} />
        </div>

        {
          isDropDown ? (
            <Login />
          ) : ""
        }


       
        <Money />
       
      </div>

    </>
  );
}