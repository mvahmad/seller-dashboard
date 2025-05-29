"use client"
import Link from "next/link"
import Progress from "@/app/(auth)/admin/components/Progress";
import BackButton from "@/public/icons/back.svg"
import DragAndDropInput from "../../components/drag&dropInput";
import { AppRoutes } from "@/app/config/Routes";
import PlusIcone from "@/public/icons/plus.svg";
import { useState } from "react";
function AddMagazineProductMedia() {
       const [newInput , setNewInput] = useState([]);
    const handelAddNewInput = ()=>{
        const MaxInput = 3;
        if (newInput.length < MaxInput){
            setNewInput(prev => [...prev ,{}])
        }
    }
    return ( 
          <> <div className="w-full flex justify-start p-2">
            <Link href={AppRoutes.ADD_MAGAZINE_PRODUCT_ADDITIONAL_INFO} className="text-primary-600 hover:text-primary-800 flex items-center gap-2">
            <BackButton className="inline-block w-[8.02] h-[15.83px]" />
            <span className="text-[16px]">بازگشت</span>
            </Link>
        </div>
        <div className="w-full m-2 p-3 ">
            <Progress active={[1,2]} steps={[' محصول', ' اطلاعات جزیی', ' اطلاعات تکمیلی', 'عکس و فیلم']} />
        </div>
        <div className='w-full flex flex-col rounded-lg bg-white border-[1.5px] border-gray-200 my-5 gap-4'>
               <div className="text-[#243464] p-2 font-bold">اطلاعات  محصول جدید را وارد کنید</div>

                <section className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex justify-start p-3 flex-col">
                        <div className="p-3 flex gap-2">
                            <label className="text-[#2F3237] font-bold text-[14px] "> تصویر محصول </label>
                            <span className="text-[#747B8E] text-[12px]" >(حداکثر فایل500 مگابایت)</span>
                        </div>
                            <span className="text-[12px] text-[#D42620] py-1 px-3 "> توجه:عکس پروفایل حتما باید زمینه سفید باشد <Link className="text-[#2D59C8]" href={'#'}>(لینک حذف زمینه)</Link></span>
                            <DragAndDropInput />
                    </div>

                    <div className="flex justify-start p-3 flex-col">
                        <div className="p-3 flex gap-2">
                            <label className="text-[#2F3237] font-bold text-[14px] "> ویدیو محصول </label>
                            <span className="text-[#747B8E] text-[12px]" >(حداکثر فایل500 مگابایت)</span>
                        </div>
                            <span className="text-[12px] text-[#D42620]  py-1 px-3 "> توجه:عکس پروفایل حتما باید زمینه سفید باشد <Link className="text-[#2D59C8]" href={'#'}>(لینک حذف زمینه)</Link></span>
                            <DragAndDropInput />
                    </div>


                    <div className="flex justify-start p-3 flex-col">
                        <div className="p-3 flex gap-2">
                            <label className="text-[#2F3237] font-bold text-[14px] ">  نمونه صفحات</label>
                            <span className="text-[#747B8E] text-[12px]" >(حداکثر فایل500 مگابایت)</span>
                        </div>
                            <span className="text-[12px] text-[#D42620]  py-1 px-3 "> توجه:عکس پروفایل حتما باید زمینه سفید باشد <Link className="text-[#2D59C8]" href={'#'}>(لینک حذف زمینه)</Link></span>
                            <div className="flex gap-2">
                                <DragAndDropInput />
                                <div className="flex items-end ">
                                    <button className="flex justify-center p-1 gap-1 items-center  
                                    rounded-md w-[9rem] h-[2rem] bg-[#FFFFFF] text-[#366CDA]
                                    text-[14px] border-[1.5px] border-[#366CDA]
                                    hover:bg-[#366CDA] hover:text-white transition duration-300 ease-in-out
                                    " 
                                    onClick={handelAddNewInput}
                                    
                                    >
                                        <PlusIcone className="" />
                                        افزودن عکس جدید
                                    </button>
                                </div>
                            </div>
                    </div>

               

                    </div>
                
                    <div className="flex flex-col">
                            {newInput.map((_,idx)=>{
                                    return(
                                    <div key={idx} className="flex justify-start p-3 flex-col">
                                            <div className="p-3 flex gap-2">
                                                <label className="text-[#2F3237] font-bold text-[14px] "> تصویر محصول </label>
                                                <span className="text-[#747B8E] text-[12px]" >(حداکثر فایل500 مگابایت)</span>
                                            </div>
                                        <span className="text-[12px] text-[#D42620] py-1 px-3 "> توجه:عکس پروفایل حتما باید زمینه سفید باشد <Link className="text-[#2D59C8]" href={'#'}>(لینک حذف زمینه)</Link></span>
                                        <DragAndDropInput />
                                        </div>
                                    )
                                })}
                    </div>
                </section>

                
                
                <div className="flex justify-end p-4">
                <button  
                    className="bg-[#FFFFFF] text-[#366CDA]
                        text-[14px] border-[1.5px] border-[#366CDA] 
                        hover:bg-[#366CDA] hover:text-white transition duration-300 ease-in-out flex items-center
                        justify-center
                    rounded-md w-[8.25rem] h-[2rem]"> ثبت 
                    </button>
                </div>
        </div>
    
    </>
     );
}

export default AddMagazineProductMedia;