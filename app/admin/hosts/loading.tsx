"use client";
import { Oval } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Oval
        color="#ee3220"
        secondaryColor="#ee322040"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loading;
