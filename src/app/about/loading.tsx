import { TbLoader3 } from "react-icons/tb";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
      <TbLoader3 size={40} className="animate-spin text-blue-600" />
      <p className=" text-gray-500">Loading...</p>
    </div>
  );
};

export default Loading;