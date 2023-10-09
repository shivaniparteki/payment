import { useState } from "react";

import { Upi } from "./Upi";
import { DebitCard } from "./DebitCard";
import { CreditCard } from "./CreditCard";
import { NetBanking } from "./NetBanking";

export const PayMethods = ({ isPayOpen, setPayOpen }) => {
  const [isShown, setIsShown] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { item: 'UPI' },
    { item: 'Debit Card' },
    { item: 'Credit Card' },
    { item: 'Net Banking' },
  ]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item) => {
    // Move the selected item to the top of the list
    const updatedMenuItems = menuItems.filter((i) => i.item !== item);
    setMenuItems([{ item }, ...updatedMenuItems]);
    setSelectedItem(item);
    if(isPayOpen){
      setPayOpen(false)
    } else{
      setPayOpen(true)
    }

    // const handleClick = (item) => {
    // if (selectedItem === item) {
    //   setIsShown(!isShown); // Toggle the isShown state if the clicked item is the same as the currently selected item
    // } else {
    //   setIsShown(true);    // Open the modal if a different item is clicked
    //   setSelectedItem(item);   // Update the selected item
    // }
    setIsShown(selectedItem !== item || !isShown);

  };


  return (
    <>
      <div className="wrapper bg-white d-flex flex-column mt-3" style={{ width: "100%", borderRadius: "14px" }}>
        <ul className="list-unstyled list-group list-group-flush">
          {
            menuItems?.map((element, index) => {
              const isSelected = selectedItem === element?.item;

              return (
                <div key={index}>

                  <li

                    onClick={() => handleClick(element?.item)}
                    className="ps-4 py-2 pb-4 list-group-item fw-bold text-start"
                    style={{
                      marginTop: "-12px",
                      borderRadius: "10px 10px 10px 10px",
                      minWidth: "250px",
                      boxShadow: "0px -3px 15px -5px rgb(125 125 125)",
                    }}
                  >
                    <span style={{ cursor: "pointer" }}>
                      {element?.item}
                    </span>
                  </li>
                  {isSelected && isShown && (
                    <>
                      {selectedItem === "UPI" && <Upi selectedItem={selectedItem} />}
                      {selectedItem === "Debit Card" && <DebitCard selectedItem={selectedItem} />}
                      {selectedItem === "Credit Card" && <CreditCard selectedItem={selectedItem} />}
                      {selectedItem === "Net Banking" && <NetBanking selectedItem={selectedItem} />}
                    </>
                  )}


                </div>
              );
            })
          }


        </ul>
      </div>
    </>

  );

}