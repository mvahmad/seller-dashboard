export default function DetaildInfoAddProductForm({className1 ,className2}) {
  return (   
    <div className="w-full flex flex-col ">
    <form className="grid grid-cols-2 gap-4 p-4">
                    
                <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold">نویسنده </label>
                <input type="text"
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " placeholder="نام نویسنده را وارد کنید" />
                 </div>


                 <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold">تعداد جلد </label>
                <input type="number" 
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>

                <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold">تعداد صفحه </label>
                <input type="number"  
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>

                 <div className="flex flex-col gap-4 pb-4">
                <label htmlFor="productName" className="text-gray-700 text-sm font-semibold"> زبان </label>
                <select type="text" 
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none " 
                 > <option value="">انتخاب  زبان</option> /</select>
                </div>


                  <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold"> انتشارات </label>
                <select type="text"  
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>

                <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold">سال انتشار</label>
                <select type="text"  
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>

                <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold"> رده سنی</label>
                <select type="text"  
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>

                <div className="flex flex-col gap-4 pb-4 ">
                <label  className="text-gray-700 text-sm font-semibold"> سطح کتاب </label>
                <select type="text"  
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>

            
            </form>

            <div className="flex w-full gap-4 p-4 "> 
              <div className={`flex flex-col gap-4 pb-4  ${className1}`}>
                <label  className="text-gray-700 text-sm font-semibold  "> موضوع کتاب </label>
                <select type="text"  
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " />
                 </div>
            
                <div className={`flex flex-col gap-4 pb-4 ${className2}`}>
                <label  className="text-gray-700 text-sm font-semibold">نوبت چاپ </label>
                <input type="text"
                 className="border border-gray-300 rounded-lg p-2 focus:outline-none 
                 " placeholder=" نوبت چاپ را وارد کنید" />
                 </div> 
            </div>


            </div>
 )
}
