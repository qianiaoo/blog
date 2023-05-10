import { PageTitle } from "components/common/PageTitle";
import Image from "next/image";
import about from "/public/LiuXiang.png";

export default function About() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>
        Hey! I{`'`}m LIU XIANG
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-100 ltr justify-center flex-wrap">
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p className="py-2">
            中国河南省出身で、今は広島市立大学に留学しています。
          </p>
          <p className="py-2">
            知能工学科データ工学研究室に所属しています。最近はtext-to-imageに興味があります。
          </p>
          <p className="py-2">
            <span className="font-semibold">趣味:</span>{" "}
            山登るのが好きです。カメラも好きです。旅行も好きです。漫画も好きです。絵は友達が書いてくれました。
          </p>
        </div>
        <div className="relative sm:order-none order-first w-100 sm:w-72 h-96 overflow-hidden rounded-lg m-5 hover:scale-[1.02] transition-all hover:shadow-xl">
          <Image
            className="object-cover transition-all"
            src={about}
            alt="me"
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </div>
  );
}
