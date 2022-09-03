import React from 'react';

import { Section, SectionDivider, SectionDivider2, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "40+", text: 'Git & Bitbucket Repo Projects + Codepen Work'},
  { number: 'A+', text: 'Most Attendant Student in Department & Privet' },
  { number: 'A+', text: 'Upozila Director of Student Welfare Association Savar'},
  { number: 'A', text: 'Tutor & Mentor in Hasan IT' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> 
   
  </Section>
);

export default Acomplishments;
