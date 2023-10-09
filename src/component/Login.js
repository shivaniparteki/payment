import { IoMdLogOut } from "react-icons/io";
import {CgProfile} from "react-icons/cg";
export const Login = () => {
  return (
    <>
      <ul className="wrapper list-unstyled text-start d-flex flex-column mt-3 position-absolute" style={{ fontSize: "15px", color: "#000", backgroundColor: "#eee", borderRadius: "5px", top:"30px", right:"5px", width:"9rem" }}>
        <li className="py-2 px-3 d-flex align-items-center gap-1 border-bottom"><CgProfile  className="fs-6" />My account</li>
        <li className="py-2 px-3 d-flex align-items-center gap-1">< IoMdLogOut className="fs-6"/> Logout</li>
      </ul>


    </>
  );

}