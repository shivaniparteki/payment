import { Money } from "../widgets/Money";
import { PayMethods } from "./PayMethods";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";

export const Payment = () => {


  return (
    <>
      <div className="wrapper m-5  d-flex flex-column m-auto mt-5 align-items-center justify-content-center border text-center" style={{ maxWidth: "300px", backgroundColor: "#58228C", borderRadius: "14px" }}>
        <div className="w-100 d-flex align-items-center justify-content-between text-white px-3 pt-2 pb-4" style={{ paddingTop: "0px" }}>
          <HiOutlineArrowNarrowLeft style={{ fontSize: "20px" }} />
          <p className="m-0" style={{ fontSize: "20px" }}>Payment</p>
          <HiDotsHorizontal style={{ fontSize: "20px" }} />
        </div>
        <div style={{ width: "7rem" }}>
          <img className="w-100" src="https://pnghq.com/wp-content/uploads/upi-logo-png-4-free-png-images-download-84465.png" alt="UPI payment Img" />
        </div>
        <Money />
        <PayMethods />
      </div>

    </>
  );
}