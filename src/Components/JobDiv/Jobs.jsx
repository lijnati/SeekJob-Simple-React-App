import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assets/apple.png";
import logo2 from "../../assets/google.png";
import logo3 from "../../assets/amazon.png";
import logo4 from "../../assets/adobe2.png";
import logo5 from "../../assets/x.png";
import logo6 from "../../assets/amazon.png";
import logo7 from "../../assets/hu.png";
import logo8 from "../../assets/intel.png";
import logo9 from "../../assets/samsung.png";
import logo10 from "../../assets/tiktok.png";
import logo11 from "../../assets/ms.png";
import logo12 from "../../assets/nike.png";


const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web developer",
    time: "Now",
    location: "San Francisico",
    desc: "We want a front-end developer for our company.You have to experinced in Developing visually appealing website.",
    company: "Apple Inc.",
  },
  {
    id: 2,
    image: logo2,
    title: "UI/UX Designer",
    time: "1 day",
    location: "NYC",
    desc: "Google want to hire UI/UX designers for Seceret Project. You have to experinced in Figma and Adobe XD",
    company: "Google",
  },
  {
    id: 3,
    image: logo3,
    title: "Software Eng.",
    time: "14Hrs",
    location: "Berlin",
    desc: "Amazon want to hire Software Engineers for Seceret Project. You have to experinced in JavaScript(MERN stack) and Python Programming langs.",
    company: "Amazon",
  },
  {
    id: 4,
    image: logo4,
    title: "Product Manager",
    time: "2Hrs",
    location: "Budapest",
    desc: "Adobe want to hire highly experinces Product manager.who can manage the whole team to succeed",
    company: "Adobe",
  },
  {
    id: 5,
    image: logo5,
    title: "CTO",
    time: "Now",
    location: "San Francisico",
    desc: "X want a CTO for our company.You have to experinced in Developing visually appealing website.",
    company: "X corp.",
  },
  {
    id: 6,
    image: logo6,
    title: "Game Developer",
    time: "Now",
    location: "London",
    desc: "EA want a Game developer for our company.You have to experinced in Unity and Un Real Engine",
    company: "Electronic Arts",
  },
  {
    id: 7,
    image: logo7,
    title: "App Developer ",
    time: "Now",
    location: "China",
    desc: "Huawei want a Mobile and Desktop app Developer.You have to experinced in Developing visually appealing Apps.",
    company: "Huawei",
  },
  {
    id: 8,
    image: logo8,
    title: "Data Scientist",
    time: "Now",
    location: "Miami",
    desc: "We want a Data Scientist for our company.You have to experinced in Developing and analysis Data .",
    company: "Intel",
  },
  {
    id: 9,
    image: logo9,
    title: "Tech Analysit",
    time: "12Hrs",
    location: "Seoul",
    desc: "We want a Tech Analysit for our company.",
    company: "Samsung",
  },
  {
    id: 10,
    image: logo10,
    title: "React Developer",
    time: "5 days",
    location: "Cape Town",
    desc: "We want a React Developer.",
    company: "TikTok",
  },
  {
    id: 11,
    image: logo11,
    title: "C/C++ Developer",
    time: "Now",
    location: "Texas",
    desc: "Microsoft want C/C++ Developer for our company.",
    company: "MicroSoft",
  },
  {
    id: 12,
    image: logo12,
    title: "Designer",
    time: "2 days",
    location: "Tokoyo",
    desc: "We want Designer for our company.",
    company: "Nike",
  },

];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {
  Data.map(({ id, image, title, time, location, desc, company }) => (
    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
      <span className="flex justify-between items-center gap-4">
        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
          {title}
        </h1>
        <span className="flex items-center text-[#ccc] gap-1">
          <BiTimeFive /> {time}
        </span>
      </span>
      <h6 className="text-[#ccc]"> {location}</h6>
      <p className="text-[14px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
        {desc}
      </p>

      <div className="company flex items-center gap-2">
        <img
          src={image}
          title="logo icons"
          alt=""
          className="w-[10%]"
        />
        <span className="text-[14px] py-[1rem] block group-hover:text-white">
          {company}
        </span>
      </div>
      <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
        Apply Now
      </button>
    </div>
  ))
}

      </div>
    </div>
  );
};
export default Jobs;
