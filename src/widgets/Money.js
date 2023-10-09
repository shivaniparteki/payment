import { useState } from "react";
import { PayMethods } from "../component/PayMethods";

export const Money = () => {
  const [isPayOpen, setPayOpen] = useState(false)

  const handlePayOpen = () => {
    setPayOpen(!isPayOpen)
  }
  return (
    <>
      {/* <p> I am Money </p> */}

      {
        isPayOpen ? (
          <p className="m-0 text-white pb-4" style={{ fontSize: "25px", fontFamily: "sans-serif" }}>68,000 &#x20a8; </p>
        ) : (
          <div className="wrapper my-4" >
            <div>
              <div className="bg-white" style={{ width: "6rem " }}>
                <img className="w-100" src="https://pnghq.com/wp-content/uploads/upi-logo-png-4-free-png-images-download-84465.png" alt="UPI payment Img" />
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center pt-3 pb-3" style={{ minWidth: "200px", backgroundColor: "#361B4D", borderRadius: "12px" }}>
              <p className="m-0 text-white pb-4" style={{ fontSize: "25px", fontFamily: "sans-serif" }}>68,000 &#x20a8; </p>

              <p className="m-0 p-1 text-white" style={{ fontSize: "14px" }}>Payment for</p>
              <div style={{ width: "5rem" }}>
                <img className="w-100 p-2.5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAiI76Pu7u3qfYXJDY-RqmOJSTzRrlM1871KbPTVrInOq9XPTHKJZ-nLCxzU8AdUQEg&usqp=CAU" alt="" />
              </div>
            </div >
          </div >
        )
      }

      <PayMethods isPayOpen={isPayOpen} setPayOpen={setPayOpen} />


    </>

  );

}