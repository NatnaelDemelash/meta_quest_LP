import CustomButton from "../components/CustomButton";

import manVr from "../assets/manVR.png";

const Home = () => {
  return (
    <section className="flex justify-evenly items-center ">
      <div className="max-w-[580px]">
        <h3 className="bg-[#d4fe75] w-56 px-10 py-2">OCULUS QUEST</h3>

        <h1 className="text-[3rem] my-6 font-bold">
          Oculus Go Standalone Virtual Reality Headse - 32GB
        </h1>

        <h4 className="my-8">User Controlled Playback of 360 Video Content</h4>

        <CustomButton text="Buy Now" />
      </div>

      <div className="w-[36%] flex-2">
        <img src={manVr} alt="Man with VR img" />
      </div>
    </section>
  );
};

export default Home;
