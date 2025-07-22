"use client"
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logOut } from "@/src/redux/slices/authSlice";
import toast from "react-hot-toast";
import LogoutIcon from "@/src/icons/LogoutIcon";

const Logout = () => {
    const dispatch = useDispatch();
      const router = useRouter();
    
      const handleLogout = () => {
        toast.success("خروج از پنل کاربری")
        dispatch(logOut());
        router.replace("/login");
      };
  return (
<button className="logout-btn" onClick={handleLogout}>
          <LogoutIcon />
          خروج از حساب
        </button>  )
}

export default Logout