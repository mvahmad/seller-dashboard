import AdminInfoCart from "./components/adminInfoCart";
import AccountCart from "./components/accountCart";
import AdminNav from "./components/adminNav";
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
                {children}
            </main>
        </div>
  );
}