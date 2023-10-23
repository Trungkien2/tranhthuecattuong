"use client";
import Image, { StaticImageData } from "next/image";
import {
  banner,
  banner1,
  banner2,
  banner3,
  banner4,
  homeBannerDesktop1,
  homeBannerDesktop2,
  giaoHangIcon,
  QAicon,
  doiHangIcon,
  thanhToanIcon,
  zaloIcon,
  contactIcon,
  messagerIcon,
} from "../../public";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardProduct from "./components/CardProduct";

interface Ipolicy {
  img: StaticImageData;
  title: string;
  content: string;
}

const listPolicy: Ipolicy[] = [
  {
    img: QAicon,
    title: "Hỗ trợ 24/7",
    content: "Hotline hỗ trợ 1900.000.XXX",
  },
  {
    img: giaoHangIcon,
    title: "Giao hàng miễn phí",
    content: "Thời gian giao hàng nhanh chóng, từ 3 - 5 ngày làm việc",
  },
  {
    img: thanhToanIcon,
    title: "Thanh toán đa dạng",
    content: "Chấp nhận thanh toán COD, Momo, Banking",
  },
  {
    img: doiHangIcon,
    title: "Đổi trả hàng dễ dàng",
    content: "Thời gian trả hàng lên tới 30 ngày",
  },
];

export default function Home() {
  const arrBanner: StaticImageData[] = [
    banner2,
    banner3,
    banner,
    banner1,
    banner4,
  ];
  return (
    <>
      {/* Banner */}
      <div className="">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {arrBanner.map((item: StaticImageData, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-full h-557">
                <Image alt="banner" src={item} className="h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* main content */}
      <div className="container mx-auto">
        {/* section 1  */}
        <div className=" w-full flex lg:justify-between mb:flex-col lg:flex-row mb:mt-8 lg:mt-24">
          <div className="lg:mr-8 ">
            <h1 className="text-root-color text-3xl text-center mt-2 font-semibold mb:block lg:hidden">
              Nội thất phòng khách
            </h1>
            <Image src={homeBannerDesktop1} alt="home-banner" />
            <h1 className="text-root-color text-3xl text-center mt-2 font-semibold mb:hidden lg:block">
              Nội thất phòng khách
            </h1>
            <p className="text-center text-lg mt-1">
              Phòng khách được ví như trái tim của ngôi nhà, gắn kết các thành
              viên trong gia đình và đón tiếp bạn bè, người thân của gia chủ. Do
              vậy, phòng khách là nơi được đầu tư nhiều nhất với các sản phẩm
              phong cách đẹp, hiện đại và cực kỳ sang trọng.
            </p>
            <div className="flex items-center justify-center mt-2">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Mua ngay
              </button>
            </div>
          </div>
          <div className="mb:mt-6 lg:mt-0">
            <h1 className="text-root-color text-3xl text-center mt-2 font-semibold mb:block lg:hidden mb-2">
              Nội thất phòng ngủ{" "}
            </h1>
            <Image src={homeBannerDesktop2} alt="home-banner" />
            <h1 className="text-root-color text-3xl text-center mt-2 font-semibold mb:hidden lg:block">
              Nội thất phòng ngủ{" "}
            </h1>
            <p className="text-center text-lg mt-1 ">
              Phòng khách được ví như trái tim của ngôi nhà, gắn kết các thành
              viên trong gia đình và đón tiếp bạn bè, người thân của gia chủ. Do
              vậy, phòng khách là nơi được đầu tư nhiều nhất với các sản phẩm
              phong cách đẹp, hiện đại và cực kỳ sang trọng.
            </p>
            <div className="flex items-center justify-center mt-2">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
        {/* Danh mục sản phẩm */}
        <div className="w-full mt-6 mb:hidden lg:block">
          <h1 className="text-root-color text-3xl text-center mt-2 font-semibold">
            Danh Mục Sản Phẩm
          </h1>
          <div className="mt-10">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {arrBanner.map((item: StaticImageData, index: number) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-56">
                    <Image
                      alt="banner"
                      src={item}
                      className="h-full object-cover"
                    />
                  </div>
                  <p className="text-root-color text-sm mt-2 text-center">
                    Tranh Thêu
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* sản phẩm mới ra mắt  */}
        <div className="w-full mt-6">
          <h1 className="text-root-color text-3xl text-center mt-2 font-semibold">
            Sản Phẩm Mới Ra Mắt
          </h1>
          <div className="grid lg:grid-cols-4 mb:grid-cols-2 gap-4 mt-5">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
      {/* giới thiệu về Tranh thuê */}
      <div className="w-full mt-6 bg-[#f8f8f8] flex justify-center ">
        <div className="container mx-auto p-5">
          {" "}
          <h1 className="text-root-color text-3xl text-center mt-2 font-semibold">
            Về Tranh Thêu Cát Tường
          </h1>
          <p className="text-center mt-3">
            Với mong muốn phát triển thương hiệu bằng nội lực, Tranh Thêu Cát
            Tường đã chú trọng vào thiết kế và sản xuất nội thất hiện đại, thoải
            mái. Danh mục sản phẩm của Tranh Thêu Cát Tường thường xuyên được
            đổi mới và cập nhật, liên tục cung cấp cho khách hàng các dòng sản
            phẩm theo xu hướng mới nhất. Do chính người Việt thiết kế và sản
            xuất, nội thất thương hiệu Tranh Thêu Cát Tường luôn phù hợp với
            cuộc sống Á Đông, đem đến sự tiện nghi hoàn hảo trong mọi không gian
            sống.
          </p>
        </div>
      </div>
      {/* các chính sách giao hàng */}
      <div className="container mx-auto flex mb:flex-col lg:flex-row justify-between mt-14">
        {listPolicy?.map((item: Ipolicy, index: number) => {
          return (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <div className="bg-[#f8f8f8] rounded-full p-2 w-[40px] ">
                  <Image alt="polyci" src={item.img} width={25} />
                </div>
              </div>
              <h2 className="text-root-color my-4 text-lg">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>

      {/* Tư vấn dưới điện thoại  */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-16 bg-white border border-b-gray-400 lg:hidden mb:flex justify-between items-center  text-white z-50">
        <div className="bg-[#007aff] flex items-center text-[10px] h-5 p-4 rounded-2xl">
          <a href="#">
            <Image src={zaloIcon} alt="zalo" width={28} />
          </a>
          <span className="ml-3">Nhận tư vấn qua zalo</span>
        </div>
        <div className="bg-[#e70505;] flex items-center text-[10px] h-5 p-4 rounded-2xl">
          <a href="#">
            <Image src={contactIcon} alt="zalo" width={28} />
          </a>
          <span className="ml-3">Nhận tư vấn qua zalo</span>
        </div>
        <div className="bg-[#007aff] flex items-center text-[10px] h-5 p-4 rounded-2xl">
          <a href="#">
            <Image src={messagerIcon} alt="zalo" width={28} />
          </a>
          <span className="ml-3">Nhận tư vấn qua Messager</span>
        </div>
      </div>
    </>
  );
}
