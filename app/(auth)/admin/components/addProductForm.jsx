import Link from "next/link";

export default function AddProductForm() {
    return (
        <div className="w-full flex flex-col rounded-lg bg-white border-[1.5px] border-gray-200 my-5 gap-4">
                 <div className="text-[#243464] p-2 font-bold">اطلاعات محصول جدید را وارد کنید</div>
               <form className="grid grid-cols-2">
                     <div className="flex flex-col gap-4 p-4">
               
                <div className="flex flex-col gap-4 pb-4 ">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold">نام محصول</label>
                <input type="text" id="productName" name="productName"
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " placeholder="نام محصول را وارد کنید" />
                 </div>

                <div className="flex flex-col gap-2">
                    <label>وضعیت انتشار</label>
                    <div className="flex gap-2">
                        <div className=" flex gap-1">
                             <input type="radio" />
                            <label>فعال</label>
                        </div>
                       
                            <div  className=" flex gap-1"> 
                                 <input type="radio" />
                        <label>غیرفعال</label>
                            </div>
                       
                    </div>
                </div>


            </div>



             <div className="flex flex-col gap-4  p-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold">دسته بندی محصول</label>
                <select type="text" id="productName" 
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none " 
                 > <option value="">انتخاب دسته بندی</option> /</select>
            </div>
              <div className="flex flex-col gap-4 p-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold">موجودی محصول</label>
                <input type="text" id="productName" name="productName"
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " placeholder=" موجودی محصول" />
            </div>
             <div className="flex flex-col gap-4 p-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold">قیمت محصول</label>
                <input type="number" id="productName" name="productName"
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " placeholder=" قیمت محصول " />
            </div>
                
            </form> 
            <div className="flex justify-end p-4">
            <Link href={"/admin/add-product/detaild-info"} className="bg-[#366CDA] text-white flex items-center justify-center
             rounded-md w-[8.25rem] h-[2rem]"> مرحله بعد</Link>
            </div>

        </div>
    )
}