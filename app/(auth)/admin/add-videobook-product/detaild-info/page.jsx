import Link from "next/link";
import BackButton from "@/public/icons/back.svg"
import { AppRoutes } from "@/app/config/Routes";
import Progress from "@/app/(auth)/admin/components/Progress";
import DetaildInfoAddProductForm from "@/app/(auth)/admin/components/detailInfoAddProductForm";
function AddVideoProductDetaildInfo() {
    return ( 
        <>
            <div className="w-full flex justify-start p-2">
            <Link href={AppRoutes.ADD_VIDEOBOOK_PRODUCT} className="text-primary-600 hover:text-primary-800 flex items-center gap-2">
            <BackButton className="inline-block w-[8.02] h-[15.83px]" />
            <span className="text-[16px]">بازگشت</span>
            </Link>
        </div>
        <div className="w-full m-2 p-3 ">
            <Progress active={[1,2]} steps={[' محصول', ' اطلاعات جزیی', ' اطلاعات تکمیلی', 'عکس و فیلم']} />
        </div>
        <div className='w-full flex flex-col rounded-lg bg-white border-[1.5px] border-gray-200 my-5 gap-4'>
            <div className="text-[#243464] p-2 font-bold">اطلاعات  محصول جدید را وارد کنید</div>
            <DetaildInfoAddProductForm className1={'w-full'} className2={'hidden'} />
            <div className="px-4 flex gap-1">
                <input type="checkbox" className="text-[#2F3237]" />
                <span className="text-[14px] font-bold text-[#2F3237]">کتاب ویدیویی به صورت CDوDVDموجود است.</span>
            </div>
              <div className="flex justify-end p-4">
            <Link href={AppRoutes.ADD_VIDEOBOOK_PRODUCT_ADDITIONAL_INFO} 
            className="bg-[#FFFFFF] text-[#366CDA]
                text-[14px] border-[1.5px] border-[#366CDA] 
                hover:bg-[#366CDA] hover:text-white transition duration-300 ease-in-out flex items-center
                 justify-center
             rounded-md w-[8.25rem] h-[2rem]"> مرحله بعد</Link>
            </div>
            </div>


    </>
     );
}

export default AddVideoProductDetaildInfo;