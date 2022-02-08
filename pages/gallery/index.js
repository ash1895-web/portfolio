import VideoCard from "../../components/VideoCard";
import style from "./gallery.module.css";

const videoLinks = [
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6878787618017026048?compact=1",
  description: 'Expanding Images'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6879336143394099200?compact=1",
  description: 'Progress Bar'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6879697081058123776?compact=1",
  description: 'Rotating Nav'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6880082666260197376?compact=1",
  description: 'Hidden Search'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6880490508083449856?compact=1",
  description: 'Image Blur'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6880925933071675392?compact=1",
  description: 'Scroll Animation'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6881289455123226624?compact=1",
  description: 'Split Landing Page'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6881701365178081280?compact=1",
  description: 'Form-Wave'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6882252303760523264?compact=1",
  description: 'FAQ'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6882387025002151936?compact=1",
  description: 'Animated Navigation'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6882686015505600512?compact=1",
  description: 'Social Increment'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6883134525845635072?compact=1",
  description: 'Clock'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6883809492316811264?compact=1",
  description: 'Content Placeholder'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6884213558901575680?compact=1",
  description: 'Slider Checkbox'},
  {url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6884578429627351040?compact=1",
  description: 'Modal'},
];

export default function Gallery({videoLinks}) {
  return (
    <div className={style.container}>
        <h1>15 Days of Revisiting JS Journey</h1>
        <p>Code can be found <a target='_blank' rel="noreferrer noopener" href='https://github.com/ash1895-web'>here</a></p>
      <>
        {videoLinks.map((item, i) => (
          <VideoCard src={item.url} key={i} description={item.description}/>
        ))}
      </>
    </div>
  );
}

export async function getStaticProps(){
  return{
    props: {videoLinks}
  }
}
