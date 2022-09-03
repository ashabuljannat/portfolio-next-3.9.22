import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { html, mern, react, rn, volunteer } from "../../constants/constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Projects = () => (
  <>
    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <SectionDivider />
      <Tabs>
        <TabList>
          <Tab>Full Stack(MERN/Next & Firebase)</Tab>
          <Tab>Front-end(React+API)</Tab>
          <Tab>Front-end(HTML+CSS+Js)</Tab>
          <Tab>React Native/Expo</Tab>
          <Tab>Volunteer project</Tab>
        </TabList>

        <TabPanel>
          <GridContainer>
            {mern.map((p, index) => {
              return (
                <BlogCard key={index}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title="true">{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent>__Stack__</TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={p.visit} >Visit</ExternalLinks>
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              );
            })}
          </GridContainer>
        </TabPanel>

        <TabPanel>
          <GridContainer>
            {react.map((p, index) => {
              return (
                <BlogCard key={index}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title="true">{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              );
            })}
          </GridContainer>
        </TabPanel>

        <TabPanel>
          <GridContainer>
            {html.map((p, index) => {
              return (
                <BlogCard key={index}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title="true">{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              );
            })}
          </GridContainer>
        </TabPanel>

        <TabPanel>
          <GridContainer>
            {rn.map((p, index) => {
              return (
                <BlogCard key={index}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title="true">{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={p.visit}>visit</ExternalLinks>
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              );
            })}
          </GridContainer>
        </TabPanel>

        <TabPanel>
          <GridContainer>
            {volunteer.map((p, index) => {
              return (
                <BlogCard key={index}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title="true">{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              );
            })}
          </GridContainer>
        </TabPanel>
      </Tabs>
    </Section>
  </>
);

export default Projects;
