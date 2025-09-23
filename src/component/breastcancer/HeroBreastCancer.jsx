import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HeroBreastCancer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`py-12 lg:py-24 ${
        theme === "light" ? "bg-white text-black" : "bg-dark"
      }`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-20 gap-6 pb-7">
        <div className="w-full col-span-1 lg:col-span-2">
          <iframe
            className="w-full rounded-3xl"
            height="372"
            src="https://www.youtube.com/embed/iP1fCs46ekk"
            title="Breast Cancer Awareness Video Template"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full col-span-1">
          <iframe
            height="372"
            className="w-full rounded-3xl"
            src="https://www.youtube.com/embed/uyoHti9TSr8"
            title="Breast Cancer Awareness Video Featuring Hoda Kotb"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-20 gap-6">
        <div className="w-full col-span-1">
          <iframe
            height="372"
            className="w-full rounded-3xl"
            src="https://www.youtube.com/embed/Ig1-n4X8pCY"
            title="Breast Cancer - Causes, Types, Symptoms and Treatment Options"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full col-span-1">
          <iframe
            height="372"
            className="w-full rounded-3xl"
            src="https://www.youtube.com/embed/srDdIbFLbJY"
            title="5 Signs of Breast cancer | 3D Animation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full col-span-1">
          <iframe
            height="372"
            className="w-full rounded-3xl"
            src="https://www.youtube.com/embed/P6d6m0mCCzA"
            title="What is Breast Cancer? Breast Cancer Awareness Month for Kids (Educational Cartoon)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-20 gap-6 py-7">
        <div className="w-full col-span-1">
          <iframe
            height="372"
            className="w-full rounded-3xl"
            src="https://www.youtube.com/embed/srDdIbFLbJY"
            title="5 Signs of Breast cancer | 3D Animation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full col-span-2">
          <iframe
            height="372"
            className="w-full rounded-3xl"
            src="https://www.youtube.com/embed/P6d6m0mCCzA"
            title="What is Breast Cancer? Breast Cancer Awareness Month for Kids (Educational Cartoon)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-20 gap-6 pb-7">
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/KyeiZJrWrys"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/T2_L9dqW8eE"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/Yz-kFna8oqI"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-20 gap-6 pb-7">
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/vVkBfKPZnJM"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/TN_iDEG3NCE"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/zhKnW2ri33E"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-20 gap-6 pb-7">
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/dm_z73kyC9Q"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/-ygucOBbKJA"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full px-20">
        <iframe
          height="372"
          className="w-full rounded-3xl"
          src="https://www.youtube.com/embed/H4YV2frdHes"
          title="Breast Cancer Awareness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HeroBreastCancer;
