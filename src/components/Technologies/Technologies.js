import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaServer, FaFigma, FaPlus } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Skill Technologies</SectionTitle>
    <SectionDivider colorAlt />
    <SectionText>
      I've learned and worked with a range of huge technologies in the web & app development world. From scratch. 
    UI , Front-end, Back-end, Database, authentication, security, tools.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, SCSS, JS, ES6+, Bootstrap, Tailwind, React+ReactNative, Next, M-UI,
            Aint-UI, jQuery, Darkmode.js, Emailjs, Spring.js,
            Swiper.js, Chart.js, Anime.js, CSS generators, ScrollReval.js,
            React-bootstrap, Material-ui, Semantic-ui, Chakra-ui,styled-component,
           
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaServer size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node, Next, Express, nodemon, Cors, Body-perser, File-upload,
            heroku, Senity-io, Dotenv, Jwt, Restful API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB, firebase database, Storage, Mongoose,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiFirebase size="2.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
          <ListParagraph>
            Auth system, firebase store, realtime database, storage, hosting,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaFigma size="2.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Netlify, Varcel, Figma, AdobeXD, debug tools, console tools, Editor
            plugin, Extension, troubleshooting
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaPlus size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            vaximplant, WebRTC, Github, Bitbucket, jira, Trello, Slack,
            reCaptcha, Google-map-API, Stripe, Paypal, SSLCommerz(Bangladesh),
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
