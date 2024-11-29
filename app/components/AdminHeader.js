import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";


export default function AdminHeader({handleDrawerOpen}) {
    return (
      <div className="flex justify-between  bg-[#525f6d] py-2">
        <div className="flex">
          <button 
          className="ml-2 block sm:hidden"
          type="button"
          onClick={handleDrawerOpen}
          >
            <TiThMenu  size="20"/>
            </button>
          <Link href="/admin" className="flex gap-2 px-2 hover:text-green-400">
            <IoHome size="20" />
            Home
          </Link>
        </div>
        <div>
          <button 
          className="bg-[#F3A847] mr-2 py-1 px-2 rounded-md hover:bg-[#e8a753]"
          >Logout</button>
        </div>
      </div>
    );
  }