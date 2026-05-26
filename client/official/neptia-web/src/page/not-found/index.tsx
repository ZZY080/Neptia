// src/pages/NotFound.jsx
import Lottie from "react-lottie";
import animationData from "@assets/lottie/not-found.json";

const NotFound = () => {
  return (
    <div
      className="not-found-page"
      style={{
        height: "100dvh",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={500}
        width={500}
      />
    </div>
  );
};

export default NotFound;
