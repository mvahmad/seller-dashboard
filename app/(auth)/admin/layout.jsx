import AdminInfoCart from "./components/adminInfoCart";
import AccountCart from "./components/accountCart";
import AdminNav from "./components/adminNav";
import Avatar from "@/public/images/Avatars.png";
import BellIcone from "@/public/icons/bell.svg";
export default function AdminLayout({ children }) {
  return (
            <div className="flex flex-row bg-gray-100">
            <aside className="bg-white rounded-xl m-[1rem] py-4 w-1/5 
            flex flex-col h-full items-center mt-4 px-2  border-1  ">
                <AdminInfoCart />
                <AdminNav />
                <AccountCart />
            </aside>
            <main className="flex-1 p-4 m-[1rem] rounded-lg ">
            <section className="flex flex-col items-start justify-start w-full h-full ">
              <div className="w-full flex items-center justify-between rounded-lg bg-white border-1
             border-gray-200 p-3  gap-4">
                <h1 className="text-[14px] font-bold text-[#243464]">محصول ها (افزودن محصول جدید) </h1>
                <div className="flex items-center gap-2 ">
                    <div className="rounded-lg p-2 bg-[#366CDA] text-white " > 
                        <span>موجودی:</span>
                        <span>23000</span>
                        <span>تومان</span>
                    </div>
                    <button>
                        <BellIcone className="w-[1.5rem] h-[1.5rem]" />
                    </button>
                    <button className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                        <img src={Avatar.src} alt="Avatar" className="w-full h-full object-cover" />
                    </button>    
                </div>
             </div>
                {children}
            </section>
            </main>
        </div>
  );
}