import { useCallback, useEffect } from "react";

const MemevibesMenu = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div
      className="rounded-xl bg-gray-400 w-[430px] h-[364px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <button className="cursor-pointer [border:none] p-0 bg-gray-300 absolute top-[56px] left-[93px] rounded-xl shadow-[0px_4px_0px_1px_#000] w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[55px] text-mid font-inika text-white text-center">
          community
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-gray-300 absolute top-[133px] left-[93px] rounded-xl shadow-[0px_4px_0px_1px_#000] w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[85px] text-mid font-inika text-white text-center">
          Buy
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-gray-300 absolute top-[210px] left-[93px] rounded-xl shadow-[0px_4px_0px_1px_#000] w-[199px] h-[33px] overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[5px] left-[61px] text-mid font-inika text-white text-center">
          Developer
        </b>
      </button>
    </div>
  );
};

export default MemevibesMenu;
