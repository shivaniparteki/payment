import { useState } from "react";
import { menuItems } from "../utils/Constant";
import { Upi } from "./Upi";

export const PayMethods = () => {
  const [isShown, setIsShown] = useState(false)
  const [selected, setSelected] = useState("")

  const handleClick = (item) => {
    if (selected === item) {
      setIsShown(!isShown); // Toggle the isShown state if the clicked item is the same as the currently selected item
    } else {
      setIsShown(true);    // Open the modal if a different item is clicked
      setSelected(item);   // Update the selected item
    }
  }


  return (
    <>
      <div className="wrapper bg-white d-flex flex-column mt-3" style={{ width: "100%", borderRadius: "14px" }}>
        <ul className="list-unstyled list-group list-group-flush">
          {
            menuItems?.map((element, index) => {
              return (

                <li key={index} onClick={() => handleClick(element?.item)} className="ps-4 py-2 pb-4 list-group-item fw-bold text-start" style={{ marginTop: "-12px", borderRadius: "10px 10px 10px 10px", minWidth: "250px", boxShadow: "0px -3px 15px -5px rgb(125 125 125)" }}>
                  <span style={{ cursor: "pointer" }}>
                    {element?.item}
                  </span>
                </li>
              );
            })
          }

          {

            isShown ? <Upi selected={selected} /> : ""

          }

        </ul>
      </div>
    </>

  );

}