import Link from "next/link";
import BackButton from "@/public/icons/back.svg"
import { AppRoutes } from "@/app/config/Routes";
import Progress from "@/app/(auth)/admin/components/Progress";
import AddProductForm from "../components/addProductForm";
export default function AddAudioBookProduct() {
    return ( 
    <>
         <div className="[Add Audio Book Product] w-full flex justify-start p-2">
            <Link href={'#'} className="text-primary-600 hover:text-primary-800 flex items-center gap-2">
            <BackButton className="inline-block w-[8.02] h-[15.83px]" />
            <span className="text-[16px]">بازگشت</span>
            </Link>
        </div>
        <div className="w-full m-2 p-3 ">
            <Progress active={[1,2]} steps={[' محصول', ' اطلاعات جزیی', ' اطلاعات تکمیلی', 'عکس و فیلم']} />
        </div>
            <AddProductForm href={AppRoutes.ADD_AUDIOBOOK_PRODUCT_DETAILD_INFO} />
    
    </> );
}

