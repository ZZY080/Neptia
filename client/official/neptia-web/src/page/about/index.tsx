import animationData from "@assets/lottie/dev.json";

import Lottie from "react-lottie";

const About = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={200}
        width={200}
      />
      <div>敬请期待...</div>
    </div>
  );
};

export default About;
