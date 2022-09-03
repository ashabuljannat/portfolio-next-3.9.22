import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Service/Service";
import Technologies from "../components/Technologies/Technologies";
import TimeLineTitle from "../components/TimeLine/TimeLineTitle";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ScrollToTop from "react-scroll-to-top";


const Home = () => { 
  
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <ScrollToTop smooth top={300} color="aqua" style={{  borderRadius: '30%'}}/>
      <TimeLineTitle/>     
      <Technologies />
      <Projects />   
      <Services/>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
