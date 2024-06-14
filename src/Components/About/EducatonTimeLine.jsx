import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const EducatonTimeLine = () => {
  return (
    <div className=" mt-16">
      <Timeline>
        
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Start learning programming
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              I started learn the programming is in 2021 from my cousin. He
              started teach me Java programming language. From this, I started
              in touch with technologies and interested.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              KMD software development class
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              After that my cousin has not time to teach me. So, I join the KMD
              software development class. From this class, I know the about SQL
              database, C# and Java. From this class I get the experience of
              making the window application development and I know my self I am
              very interested in software developing and I decided my carrier.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              KMD diploma
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              From KMD class, I know about the KMD's NCC international diploma.
              When I decided to make developer, I think I should have any
              diploma related with them and attend it.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              MMSIT
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              During attending the diploma, I knew the web development class
              called MMSIT. MMSIT gives basic website development class free and
              so I attended it. Because of MMSIT's teacher Hein Htet Zan
              teaching, I am very interested in web development and I decided to
              make web developer. After basic class, I join the Special web
              development class and from that I studied the React development.
              After SWD, I also studied the backed development in MMSIT.
              Although, backend development is still studying and not finished.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default EducatonTimeLine;
