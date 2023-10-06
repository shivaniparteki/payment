import { menuItems } from "../utils/Constant";

export const PayMethods = () => {
  return (
    <>
      <div className="wrapper bg-white d-flex flex-column mt-3" style={{ width: "100%", borderRadius: "14px" }}>
        <ul className="list-unstyled list-group list-group-flush">
          {
            menuItems?.map((element, index) => {
              return (
                <li className="ps-4 py-2 pb-4 list-group-item fw-bold text-start" style={{ marginTop:"-12px", borderRadius: "10px 10px 10px 10px", minWidth: "250px", boxShadow: "0px -3px 15px -5px rgb(125 125 125)" }}> {element?.item} </li>
              );
            })
          }
        </ul>
      </div>
    </>

  );

}