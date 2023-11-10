import { useEffect } from "react";
import Header from "../components/header";

const MemeVibes = () => {
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
  return (
    <div className="relative bg-gold w-full h-[4696px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-lg text-black font-headlandone md:h-[6680px]">
      <div className="my-0 mx-[!important] absolute top-[2169px] left-[0px] flex flex-row items-start justify-start gap-[500px] z-[0] text-21xl font-goblin-one lg:gap-[400px] md:flex-col md:gap-[0px] md:pl-[70px] md:pt-[750px] md:box-border">
        <div className="relative w-4 h-[25px]" />
        <div
          className="relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-11xl"
          data-animate-on-scroll
        >
          Key features
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3598px] left-[-1px] flex flex-row items-start justify-start gap-[410px] z-[1] text-21xl font-goblin-one lg:gap-[280px] md:flex-col md:gap-[0px] md:pl-[50px] md:pt-[1150px] md:box-border">
        <div className="relative w-[25px] h-10" />
        <div
          className="relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-[25px] md:text-center md:w-[300px]"
          data-animate-on-scroll
        >
          How to get started
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4598px] left-[3px] flex flex-row items-center justify-start gap-[13px] z-[2] text-center text-[14px] font-inika lg:pb-0 lg:box-border md:pt-[2000px] md:box-border">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2364px] left-[8px] w-[1440px] flex flex-row items-start justify-center gap-[375px] z-[3] text-gray-100 lg:gap-[350px] lg:pr-[270px] lg:box-border md:flex-col md:gap-[200px] md:pl-2.5 md:pt-[800px] md:pb-0 md:box-border">
        <div className="relative w-[389.8px] h-[659px]">
          <div
            className="absolute top-[0px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.5),_#ffdd07_93.85%)] shadow-[0px_4px_4px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[17px] left-[9px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  MEME MARKETPLACE 🎭
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Trade and showcase your favorite memes in our exclusive
                  marketplace. Discover rare and hilarious memes, and support
                  creators with MemeVibesCoin.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[426px] left-[2.8px] w-[387px] h-[233px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.5),_#ffdd07_93.85%)] shadow-[0px_4px_4px_#000] w-[387px] h-[233px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[17px] left-[9px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  COMMUNITY GOVERNANCE 🌐
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  MemeVibesCoin holders have a say in the development and
                  direction of the project. Vote on proposals and actively
                  contribute to the growth of the MemeVibesCoin community.
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[387px] h-[625px]">
          <div className="absolute top-[458px] left-[197.3px] w-[164px] h-[167px]" />
          <div
            className="absolute top-[0px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.5),_#ffdd07_93.85%)] shadow-[0px_4px_4px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[17px] left-[9px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  REWARDS AND INCENTIVES 🚀
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Holders of MemeVibesCoin will be eligible for exclusive
                  rewards, airdrops, and access to special events. The more you
                  hold, the more you laugh!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3211px] left-[0px] w-[891px] flex flex-row items-start justify-start gap-[550px] z-[4] text-21xl font-goblin-one lg:gap-[421px] md:flex-col md:gap-[0px] md:pl-[100px] md:pt-[1200px] md:box-border">
        <div className="relative w-[29px] h-11" />
        <div
          className="relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-11xl"
          data-animate-on-scroll
        >
          Partners
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3377px] left-[4px] flex flex-row items-center justify-start gap-[390px] z-[5] lg:gap-[250px] md:w-[200px] md:flex-col md:gap-[0px] md:pl-[210px] md:pt-[1150px] md:box-border">
        <div className="relative w-[22px] h-11" />
        <div
          className="flex flex-row items-center justify-start gap-[83px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0] md:gap-[30px]"
          data-animate-on-scroll
        >
          <img
            className="relative w-[88px] h-[88px] overflow-hidden shrink-0 object-cover md:w-[60px] md:h-[60px]"
            alt=""
            src="/frame-152@2x.png"
          />
          <img
            className="relative w-[88px] h-[88px] overflow-hidden shrink-0 object-cover md:w-[60px] md:h-[60px]"
            alt=""
            src="/frame-153@2x.png"
          />
          <img
            className="relative w-[88px] h-[88px] overflow-hidden shrink-0 object-cover md:w-[60px] md:h-[60px]"
            alt=""
            src="/frame-154@2x.png"
          />
          <img
            className="relative w-[88px] h-[88px] overflow-hidden shrink-0 object-cover md:w-[60px] md:h-[60px]"
            alt=""
            src="/frame-155@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4521px] left-[0px] flex flex-row items-center justify-start gap-[50px] z-[6] md:gap-[20px] md:pt-[2000px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[50px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[237px] left-[0px] flex flex-row items-center justify-start gap-[450px] z-[7] text-xl lg:gap-[300px] md:w-[550px] md:h-0 md:flex-col md:gap-[0px] md:pb-0 md:box-border">
        <div className="relative w-[45px] h-[38px]" />
        <div
          className="w-[469px] flex flex-row items-start justify-center p-2.5 box-border relative gap-[10px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute my-0 mx-[!important] top-[50px] left-[48px] z-[0] md:text-[15px]">
            Join the Fun, Ride the Meme Wave!
          </div>
          <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] text-21xl font-goblin-one z-[1] md:text-11xl">
            MemeVibesCoin
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[399px] left-[0px] flex flex-row items-center justify-start py-0 pr-[3px] pl-0 gap-[600px] z-[8] lg:gap-[450px] md:flex-row md:gap-[100px]">
        <div className="relative w-[29px] h-11" />
        <img
          className="relative w-[221px] h-[230px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/beagle-dog-sitting@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[655px] left-[-5px] flex flex-row items-end justify-start gap-[470px] z-[9] text-center text-xl lg:gap-[330px] lg:pt-[30px] lg:box-border md:gap-[40px]">
        <div className="relative w-[25px] h-8" />
        <div
          className="relative inline-block w-[437px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-bottom] opacity-[0] md:text-[16px] md:w-[300px]"
          data-animate-on-scroll
        >
          Welcome to MemeVibesCoin, where laughter meets blockchain! 🚀
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[829px] left-[0px] flex flex-row items-center justify-start gap-[470px] z-[10] text-center text-white lg:gap-[340px] md:w-[250px] md:gap-[0px] md:items-center md:justify-end md:pl-0 md:pr-0 md:box-border">
        <div className="relative w-[29px] h-[38px]" />
        <div
          className="relative w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#100e0e,_#ffdd07_93.85%)] w-[387px] h-[233px] overflow-hidden">
            <div className="absolute top-[29px] left-[11px] inline-block w-[365px] h-[140px]">
              MemeVibesCoin is not just a cryptocurrency; it's a
              community-driven memecoin that thrives on the power of humor. We
              believe in the magic of memes to bring joy, laughter, and unity to
              the crypto space.
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1274px] left-[0px] w-[1439px] flex flex-row items-start justify-center gap-[280px] z-[11] text-gray-100 lg:w-[1180px] md:flex-col md:gap-[200px] md:pl-5 md:box-border">
        <div className="relative w-[387px] h-[654px]">
          <div
            className="absolute top-[0px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#a1ff08,_#0c9e91_93.85%)] shadow-[0px_4px_4px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[17px] left-[9px] inline-block w-[369px] h-[187px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  BUILDING A COMMUNITY 🌐
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  MemeVibesCoin is more than just a digital asset; it's a
                  community of meme enthusiasts, crypto lovers, and fun-seekers.
                  Join us and be part of a dynamic ecosystem where creativity
                  knows no bounds!
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[421px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#a1ff08,_#0c9e91_93.85%)] shadow-[0px_4px_4px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[17px] left-[9px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  BEMPOWERING CREATORS 💎
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  We value the artists and meme creators who make our community
                  vibrant. MemeVibesCoin provides a platform for creators to
                  showcase their talent and earn rewards for spreading joy
                  through memes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[387px] h-[686px] lg:pr-[380px] lg:box-border">
          <div
            className="absolute top-[0px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#a1ff08,_#0c9e91_93.85%)] shadow-[0px_4px_4px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[17px] left-[9px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  TRANSPARENT AND FAIR 🚀
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  MemeVibesCoin is built on a decentralized blockchain, ensuring
                  transparency and fairness. No hidden agendas, just good vibes
                  and great memes.
                </p>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[456px] left-[124px] w-[221px] h-[230px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            alt=""
            src="/rear-view-of-beagle-dog-howling@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3741px] left-[4px] w-[1436px] flex flex-row items-start justify-center gap-[228px] z-[12] text-center text-gray-100 lg:w-[1150px] md:flex-col md:gap-[118px] md:pl-[15px] md:pt-[1200px] md:box-border">
        <div className="relative w-[387px] h-[582px]">
          <div
            className="absolute top-[0px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.01),_rgba(255,_221,_7,_0.01)_93.85%)] shadow-[0px_4px_0px_1px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[13px] left-[10px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  GET MEMEVIBESCOIN
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  {" "}
                  Purchase MemeVibesCoin on our partner exchanges or participate
                  in community events to earn tokens.
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[349px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.01),_rgba(255,_221,_7,_0.01)_93.85%)] shadow-[0px_4px_0px_1px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[13px] left-[10px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  CREATE AND EARN
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Are you a meme creator? Share your memes on our platform and
                  earn MemeVibesCoin rewards. The funnier, the better!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[387px] h-[582px] md:gap-[300px] md:pt-0 md:box-border">
          <div
            className="absolute top-[0px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.01),_rgba(255,_221,_7,_0.01)_93.85%)] shadow-[0px_4px_0px_1px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[13px] left-[10px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  JOIN THE COMMUNITY
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Connect with fellow meme enthusiasts on our Discord and
                  Telegram channels. Share your favorite memes and be part of
                  the conversation!
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[349px] left-[0px] w-[387px] h-[233px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(245,_245,_245,_0.01),_rgba(255,_221,_7,_0.01)_93.85%)] shadow-[0px_4px_0px_1px_#000] w-[387px] h-[233px] overflow-hidden">
              <div className="absolute top-[13px] left-[10px] inline-block w-[367px] h-[207px]">
                <p className="m-0 font-black font-inknut-antiqua">
                  HODL AND LAUGH
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Hold onto your MemeVibesCoin for exclusive rewards and enjoy
                  the laughter as the community grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default MemeVibes;
