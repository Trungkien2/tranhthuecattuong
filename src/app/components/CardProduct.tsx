"use-client";
import React from "react";
import { banner } from "../../../public";
import Image from "next/image";
type Props = {};

const CardProduct = (props: Props) => {
  return (
    <div>
      <Image alt="banner" src={banner} className="h-[308px]  " />
      <div className="p-2">
        <p className="mt-3">Tranh Thêu</p>
        {/* thông tin giá cả và nút mua hàng */}
        <div className="flex justify-between items-center mt-9">
          <p className="lg:text-[14px] mb:text-[10px]">999,000đ</p>
          <button className="bg-root-color hover:bg-gray-100 text-[10px] text-white font-bold lg:py-2 lg:px-4 border-b-4  hover:text-black rounded">
            Thêm vào Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
