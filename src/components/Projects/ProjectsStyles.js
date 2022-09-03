import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  overflow: hidden;
  width: 400px;
  background: #fff;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 10px;
  color: #f785fd;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 2px auto;
  border: 0;
  background: #b7fd4f;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  background: linear-gradient(to right, #65e8f6 10%, #f785fd 50%, #b7fd4f 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  margin-top: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const ExternalLinks = styled.a`
  color: #99fe00;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 28px;
  transition: all 0.2s;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 13px 13px 19px #d4d4d4, -13px -13px 19px #ffffff;
  border-radius: 15px;
  &:hover {
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    background: #e8e8e8;
  }
`;

export const TagList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
  padding: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 34px;
  }
`;
export const Tag = styled.li`
  color: #f4418e;
  width: 100px;
  height: auto;
  font-size: 1.5rem;
  background: linear-gradient(to right, #65e8f6 10%, #f785fd 50%, #d5f979 90%);
  padding: 8px;
  border-radius: 15px;
`;
