import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";

const FuturePlan = ({ title, text }) => {
  return (
    <div className="flex flex-row mb-3 items-start futureRight">
      <div className="min-w-[12px] me-10">
        <Spinner />
      </div>
      <div>
        <Typography variant="h6" color="blue-gray" className="leading-none">
          {title}
        </Typography>
        <Typography
          variant="small"
          color="gary"
          className="font-normal my-3 text-gray-600"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default FuturePlan;
