import Header from "../components/Header";
import SmallRectBox from "../components/SmallRectBox";
import MediumRectBox from "../components/MediumRectBox";
import LargeRectBox from "../components/LargeRectBox";
import boxStyle from "../styles/Box.module.css";

import testImage from "../public/card-bg/abstract.jpg";
import twitter from "../public/icons/twitter-blue.gif";
import linkedin from "../public/icons/linkedin.gif";
import githubIcon from "../public/icons/github.gif";
import javascriptIcon from "../public/icons/javascript.gif";
import testIcon from "../public/icons/logo.png";

export default function Home({ icon }) {
  return (
    <div>
      <Header />
      <div className={boxStyle.boxContainer}>
        <div className={boxStyle.boxContainerSmallOnly}>
          <SmallRectBox
            frontBgColor="white"
            descriptionColor="white"
            icon={twitter.src}
            backBgColor="green"
            description="Way to my Twitter profile"
            descriptionLinkExternal="/twitter"
          />
          <SmallRectBox
            icon={linkedin.src}
            frontBgColor="steelblue"
            descriptionColor="yellow"
            description="Way to my Linkedin profile"
            descriptionLinkExternal="/linkedin"
          />
          <SmallRectBox
            frontBgColor="green"
            icon={githubIcon.src}
            backBgColor="greenyellow"
            description="Way to my Github account"
            descriptionLinkExternal="/github"
          />
        </div>
        <div className={boxStyle.boxContainerSmallMedium}>
          <SmallRectBox
            frontBgColor="green"
            icon={javascriptIcon.src}
            backBgColor="greenyellow"
            description="My 15 days of Revisiting JS"
            descriptionLink="/gallery"
          />
          <MediumRectBox
            title="fifth"
            titleColor="black"
            descriptionColor="white"
            icon={testIcon.src}
            // imageSrc={testImage.src}
            frontBgColor="yellow"
            backBgColor="red"
            description="Waiting for Aseer to create something"
          />
        </div>
        <div className={boxStyle.boxContainerMediumSmall}>
          <MediumRectBox
            title="sixth"
            titleColor="black"
            descriptionColor="white"
            icon={testIcon.src}
            // imageSrc={testImage.src}
            frontBgColor="steelblue"
            backBgColor="red"
            description="Waiting for Aseer to create something"
          />
          <SmallRectBox
            title="Seventh Task"
            titleColor='black'
            icon={testIcon.src}
            description="Waiting for Aseer to create something"
            frontBgColor='green'
            descriptionLink="/gallery"
          />
        </div>
        <div className={boxStyle.boxContainerLargeOnly}>
          <LargeRectBox
            title="Eighth Task"
            titleColor="black"
            descriptionColor="white"
            icon={testIcon.src}
            // imageSrc={testImage.src}
            frontBgColor="white"
            backBgColor="red"
            description="Waiting for Aseer to create something"
          />
        </div>
      </div>
    </div>
  );
}

// test front bg image credit https://unsplash.com/photos/SFT9G3pAxLY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
