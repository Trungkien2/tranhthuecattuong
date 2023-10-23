"use client";
import React from "react";
import {
  payment1,
  payment2,
  payment3,
  payment4,
  shipment1,
  shipment2,
  shipment3,
  shipment4,
} from "../../../public";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const listPayment: StaticImageData[] = [payment1, payment2, payment3, payment4];

const listShipment: StaticImageData[] = [
  shipment1,
  shipment2,
  shipment3,
  shipment4,
];

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-6 bg-[#202020] border-t border-white">
      <div className="container mx-auto  grid-cols-4 gap-4 text-white py-6 mb:hidden lg:grid">
        <div>
          <h1 className="text-[24px] font-semibold">Về Cát Tường </h1>
          <p className="mt-4 text-start">
            Với các giải pháp công nghệ tốt nhất, Cát Tường là tất cả những gì
            bạn cần để xây dựng thương hiệu online, thành công trong bán lẻ và
            marketing đột phá.
          </p>
          <div className="flex mt-4">
            <MapPinIcon className="w-10" />
            <p className="ml-3">
              Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15,
              quận 11, Tp. Hồ Chí Minh.
            </p>
          </div>
          <div className="flex mt-2">
            <PhoneIcon className="w-6" />
            <p className="ml-3">1900.000.XXX</p>
          </div>
          <div className="flex mt-2">
            <EnvelopeOpenIcon className="w-6" />
            <p className="ml-3">hi@home-haven.abc</p>
          </div>
          <h1 className="text-[24px] font-semibold mt-4">
            Phương thức thanh toán{" "}
          </h1>
          <div className="flex gap-2">
            {listPayment.map((item: StaticImageData, index: number) => (
              <div key={index}>
                <Image alt="payment" src={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-semibold">Hỗ trợ khách hàng</h1>
          <ul>
            <li className="mt-4 cursor-pointer">Sản phẩm Khuyến Mãi </li>
            <li className="mt-4 cursor-pointer">Sản phẩm nổi bật </li>
            <li className="mt-4 cursor-pointer">Tất cả Sản phẩm </li>
          </ul>
          <h1 className="text-[24px] font-semibold mt-4">
            Phương thức vận chuyển{" "}
          </h1>
          <div className="flex gap-2">
            {listShipment.map((item: StaticImageData, index: number) => (
              <div key={index}>
                <Image alt="payment" src={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-semibold">Liên kết</h1>
          <ul>
            <li className="mt-4 cursor-pointer">Trang chủ </li>
            <li className="mt-4 cursor-pointer">Sản phẩm </li>
            <li className="mt-4 cursor-pointer">Sản phẩm Khuyến mãi</li>
            <li className="mt-4 cursor-pointer">Giới thiệu </li>
            <li className="mt-4 cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[24px] font-semibold">Chính sách </h1>
          <ul>
            <li className="mt-4 cursor-pointer">Tìm kiếm </li>
            <li className="mt-4 cursor-pointer">Giới thiệu </li>
            <li className="mt-4 cursor-pointer">Chính sách đổi trả</li>
            <li className="mt-4 cursor-pointer">Chính sách bảo mật </li>
            <li className="mt-4 cursor-pointer">Điều khoản dịch vụ</li>
            <li className="mt-4 cursor-pointer">Liên hệ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
