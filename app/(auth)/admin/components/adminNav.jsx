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
import { AppRoutes } from "@/app/config/Routes";

export default function AdminNav (){

     const navItems = [
        { name: "داشبورد",href:"#", icon: <ElemntIcon className="w-[20px] h-[20px]" /> },
        { name: "محصولات",href:AppRoutes.ADD_BOOK_PRODUCT ,icon: <ProductsIcone className="w-[20px] h-[20px]" /> },
        { name: "لیست سفارش ها" ,href:"#", icon: <Order className="w-[20px] h-[20px]" /> },
        { name: "مالی",href:"#", icon: <MaliIcone className="w-[20px] h-[20px]" /> },
        { name: "امتیاز من",href:"#", icon: <EmtiyazIcone className="w-[20px] h-[20px]" /> },
        { name: "تخفیف ها",href:"#", icon: <TakhfifIcone className="w-[20px] h-[20px]" /> },
        { name: "نظرات مشتریان",href:"#", icon: <NazaratIcon className="w-[20px] h-[20px]" /> },
        { name: "راهنما",href:"#", icon: <RahnamaIcone className="w-[20px] h-[20px]" /> },
        { name: "پشتیبانی",href:"#", icon: <PoshtibaniIcone className="w-[20px] h-[20px]" /> }
     ]


    return(
            <nav className='flex flex-col gap-[0.5rem]'>
               {
                    navItems.map((item , index)=>{
                         return(
                              <div key={index} className="flex w-[12rem]  group items-center">
                                   <span className="group-hover:bg-[#2D59C8] text-[#2D59C8] 
                                    rounded-[1rem] p-[0.85rem] ">
                                        {item.icon}
                                   </span>
                              
                             <Link  href={item.href} className="text-[#50545F]
                               flex items-center text-lg w-full
                              active:text-white rounded-[1rem] 
                              group-hover:bg-[#2D59C8] group-hover:text-white 
                              active:bg-[#2D59C8] text-[14px] p-[0.625rem]  "> 
                                    {item.name}
                              </Link> 
                              </div>
                         )
                    })
               }
            </nav>
    )
}