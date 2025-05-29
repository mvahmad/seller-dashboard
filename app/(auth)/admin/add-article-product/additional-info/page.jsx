import Link from "next/link"
import Progress from "@/app/(auth)/admin/components/Progress";
import BackButton from "@/public/icons/back.svg"
import { AppRoutes } from "@/app/config/Routes";
export default function AdditionalInfoAddArticleProduct() {
    return(
        <>
            <div className="w-full flex justify-start p-2">
            <Link href={AppRoutes.ADD_ARTICLE_PRODUCT_DETAILD_INFO} className="text-primary-600 hover:text-primary-800 flex items-center gap-2">
            <BackButton className="inline-block w-[8.02] h-[15.83px]" />
            <span className="text-[16px]">بازگشت</span>
            </Link>
        </div>
        <div className="w-full m-2 p-3 ">
            <Progress active={[1,2]} steps={[' محصول', ' اطلاعات جزیی', ' اطلاعات تکمیلی', 'عکس و فیلم']} />
        </div>

          <div className='w-full flex flex-col rounded-lg bg-white border-[1.5px] border-gray-200 my-5 gap-4'>
            <div className="text-[#243464] p-2 font-bold">اطلاعات تکمیلی محصول جدید را وارد کنید</div>


            <form className="grid grid-cols-2 gap-4 p-4">
                   <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold">فرمت فایل </label>
                <select
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " placeholder="فرمت فایل را انتخاب کنید">
                 <option value="pdf">PDF</option>
                 </select>
                 </div>

                 <div className="flex flex-col gap-4 pb-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold"> شماره شابک </label>
                <input type="number" 
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none " 
                    placeholder="شماره شابک را وارد کنید"
                  />
                </div>

                  <div className="flex flex-col gap-4 pb-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold"> شماره انتشار </label>
                <input type="number" 
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none " 
                    placeholder="شماره انتشار را وارد کنید"
                  />
                </div>

              

                   <div className="flex flex-col gap-4 pb-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold"> شماره جلد</label>
                <input type="number" 
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none " 
                 placeholder="شماره جلد را وارد کنید"
                  />
                </div>

            </form>
                <div className="flex w-full gap-4 p-4 "> 
                    <div className='flex flex-col gap-2 w-full'>
                    <label  className="text-gray-700 text-sm font-semibold  "> منابع</label>
                    <textarea type="text"  
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                    " />
                    </div>
                </div> 


             <div className="flex justify-end p-4">
            <Link href={AppRoutes.ADD_ARTICLE_PRODUCT_MEDIA}
              className="bg-[#FFFFFF] text-[#366CDA]
                text-[14px] border-[1.5px] border-[#366CDA] 
                hover:bg-[#366CDA] hover:text-white transition duration-300 ease-in-out flex items-center
                 justify-center
             rounded-md w-[8.25rem] h-[2rem]"> مرحله بعد</Link>
            </div>
            
          </div>

        </>
    )
}