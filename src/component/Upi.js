import { paymentIcons } from "../utils/Constant";

export const Upi = () => {
  return (
    <>
      {/* <p className="m-0 pt-4 pb-2 ps-4 fw-bold text-start">{selected}</p> */}
      <div >
        <div className="m-0 pt-4 pb-4 px-3 py-2 gap-2" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {
            paymentIcons?.map((icon, index) => {
              return (
                <div key={index} className="text-center" style={{ width: "2rem" }}>
                  <img className="w-100 " src={icon.img} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="p-2 pt-3 pb-4">
        <button className=" align-item-center fs-5" style={{
          fontFamily: "sans-serif", fontSize: "1.2rem",
          padding: "6px", backgroundColor: "rgb(102, 47, 162)", borderRadius: "5px", color: "whitesmoke", width: "12rem", border: "0"
        }}>
          Pay Via UPI</button>
      </div>
    </>
  );
}