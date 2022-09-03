import React from "react";
import { EduData, JobData, VolData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Timeline from "./TimeLine";

const TimeLineTitle = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionDivider />
      <Timeline EduData={EduData} />
      <Timeline EduData={JobData} />
      <Timeline EduData={VolData} />
    </Section>
  );
};

export default TimeLineTitle;
