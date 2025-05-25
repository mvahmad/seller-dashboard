import Link from "next/link"
import Progress from "@/app/(auth)/admin/components/Progress";
import BackButton from "@/public/icons/back.svg"
import DetaildInfoAddProductForm from "@/app/(auth)/admin/components/detailInfoAddProductForm";
import DragAndDropInput from "../../components/drag&dropInput";
export default function DetaildInfoAddProduct(){
    return(
       <>
          <div className="w-full flex justify-start p-2">
            <Link href={'#'} className="text-primary-600 hover:text-primary-800 flex items-center gap-2">
            <BackButton className="inline-block w-[8.02] h-[15.83px]" />
            <span className="text-[16px]">بازگشت</span>
            </Link>
        </div>
        <div className="w-full m-2 p-3 ">
            <Progress active={[1,2]} steps={[' محصول', ' اطلاعات جزیی', ' اطلاعات تکمیلی', 'عکس و فیلم']} />
        </div>
        <div className='w-full flex flex-col rounded-lg bg-white border-[1.5px] border-gray-200 my-5 gap-4'>
            <div className="text-[#243464] p-2 font-bold">اطلاعات  محصول جدید را وارد کنید</div>
            <DetaildInfoAddProductForm />
            <div className="flex justify-start px-3 flex-col">
                <div className="text-[#243464] p-2 font-bold">
                    رده کتاب
                </div>
                <div className="flex gap-4 p-2">
                    <div >
                    <input type="radio" />
                    <label >نو</label>
                </div>
                 <div>
                    <input type="radio" />
                    <label >دست دوم</label>
                </div>
                </div>
                
            </div>
            
            <div className="flex justify-start px-3 flex-col">
                <div className="p-3 flex gap-2">
                    <input type="checkbox" />
                    <label className="text-[#2F3237] font-bold text-[14px] ">فایل صوتی دارد</label>
                    <span className="text-[#747B8E] text-[12px]" >(حداکثر فایل500 مگابایت)</span>
                </div>
                <DragAndDropInput />
            </div>

             <div className="flex justify-start p-3 flex-col">
                <div className="p-3 flex gap-2">
                    <input type="checkbox" />
                    <label className="text-[#2F3237] font-bold text-[14px] ">فایل ویدیویی دارد</label>
                    <span className="text-[#747B8E] text-[12px]" >(حداکثر فایل500 مگابایت)</span>
                </div>
                <DragAndDropInput />
            </div>

                  <div className="flex justify-end p-4">
            <Link href={"/admin/add-product/additional-info"} 
            className="bg-[#FFFFFF] text-[#366CDA]
                text-[14px] border-[1.5px] border-[#366CDA] 
                hover:bg-[#366CDA] hover:text-white transition duration-300 ease-in-out flex items-center
                 justify-center
             rounded-md w-[8.25rem] h-[2rem]"> مرحله بعد</Link>
            </div>

        </div>
       </>
    )}