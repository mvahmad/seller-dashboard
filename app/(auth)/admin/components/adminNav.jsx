import Link from "next/link";
import ElemntIcon from "@/public/icons/elements.svg"
import ProductsIcone from "@/public/icons/icon.svg"
import Order from "@/public/icons/bag.svg"
import MaliIcone from "@/public/icons/mali.svg"
import EmtiyazIcone from "@/public/icons/emtiyaz.svg"
import TakhfifIcone from "@/public/icons/takhfif.svg"
import NazaratIcon from "@/public/icons/nazarat.svg"
import RahnamaIcone from "@/public/icons/rahnama.svg"
import PoshtibaniIcone from "@/public/icons/poshtibani.svg"


export default function AdminNav (){

     const navItems = [
        { name: "داشبورد", icon: <ElemntIcon className="w-[20px] h-[20px]" /> },
        { name: "محصولات", icon: <ProductsIcone className="w-[20px] h-[20px]" /> },
        { name: "لیست سفارش ها", icon: <Order className="w-[20px] h-[20px]" /> },
        { name: "مالی", icon: <MaliIcone className="w-[20px] h-[20px]" /> },
        { name: "امتیاز من", icon: <EmtiyazIcone className="w-[20px] h-[20px]" /> },
        { name: "تخفیف ها", icon: <TakhfifIcone className="w-[20px] h-[20px]" /> },
        { name: "نظرات مشتریان", icon: <NazaratIcon className="w-[20px] h-[20px]" /> },
        { name: "راهنما", icon: <RahnamaIcone className="w-[20px] h-[20px]" /> },
        { name: "پشتیبانی", icon: <PoshtibaniIcone className="w-[20px] h-[20px]" /> }
     ]


    return(
            <nav className='flex flex-col space-y-4'>
               {
                    navItems.map((item , index)=>{
                         return(
                             <Link key={index} href="/admin/dashboard" className="text-[#50545F]
                               flex gap-2 items-center text-lg
                              hover:text-white rounded-2xl hover:bg-[#2D59C8]  px-3 py-2"> 
                                   {item.icon}
                                   <span className="text-[14px]"> {item.name}</span>
                              </Link> 
                         )
                    })
               }
            </nav>
    )
}