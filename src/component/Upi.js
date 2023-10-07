import { paymentIcons } from "../utils/Constant";
import { CreditCard } from "./CreditCard";
import { DebitCard } from "./DebitCard";
import { NetBanking } from "./NetBanking";

export const Upi = ({ selected }) => {
  console.log("selected");
  console.log(typeof selected);
  return (
    <>
      {
        selected === "UPI" && (
          <>
            {/* <p className="m-0 pt-4 pb-2 ps-4 fw-bold text-start">{selected}</p> */}
            <div >
              <div className="m-0 px-3 py-2 gap-2" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                {
                  paymentIcons?.map((icon, index) => {
                    return (
                      <div className="text-center" style={{ width: "2.5rem" }}>
                        <img key={index} className="w-100 " src={icon.img} alt="" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="p-2">
              <button className=" align-item-center fs-5" style={{
                fontFamily: "sans-serif", fontSize: "1.2rem",
                padding: "6px", backgroundColor: "rgb(102, 47, 162)", borderRadius: "5px", color: "whitesmoke", width: "12rem", border: "0"
              }}>
                Pay Via UPI</button>
            </div>
          </>
        )
      }

      {/* {
        selected === "Debit Card" && (<DebitCard />)
      }

      {
        selected === "Credit Card" && (<CreditCard />)
      }

      {
        selected === "Net Banking" && (<NetBanking />)
      } */}

    </>
  );
}