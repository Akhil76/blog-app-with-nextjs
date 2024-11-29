import AdminMenu from './AdminMenu';
import Link from 'next/link';
import { MdDashboard } from "react-icons/md";


export default function AdminSidebar({open,handleDrawerOpen}) {
  
    return ( 
        <div 
        className={`${open? "hidden" : "block"} fixed left-0 top-0 z-[9999] sm:block sm:relative h-screen min-w-64 flex-col overflow-y-auto bg-gray-400`}
        style={{
            overflowY: 'scroll',
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none'  
          }}
        >
            <div className="flex justify-end">
                <button
                className="mr-2 block sm:hidden"
                onClick={handleDrawerOpen}
                >x</button>
            </div>
            <div className='p-2 m-2'>
                <img class="mx-auto object-cover w-16 h-16 rounded-full" src="/samsung.jpg" alt="Product" />
            </div>
            <Link href="/admin" className="flex item-center justfy-start gap-4 text-grey-400 py-2 pl-2 mt-4 bg-emerald-900 rounded text-green-400 mx-2">
                <MdDashboard size="20"/>
                <span>Dashboard</span>
            </Link>
            <AdminMenu />
        </div>

    );
}