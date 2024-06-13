import Cards from "./components2/Cards";
import Cards2 from "./components2/Cards2";
import Cards1 from "./components2/Cards1";
import Header from "./components2/Header";
import Footer from "./components2/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="flex gap-6 items-center justify-center">
        <Cards value="55%" discr="Average Salery Hike" />
        <Cards value="600+" discr="Different Courses" />
        <Cards value="12000+" discr="Career Transitions" />
        <Cards value="400+" discr="Hiring Partners" />
      </div>
      <h1 className="text-3xl ml-24">Our Courses</h1>
      <h3 className="text-2xl mt-4 ml-24">Data Science & Analytics</h3>

      <div className="flex  gap-14 mx-24 ">

        <Cards1 heading="Data Science With generative AI Courses" details="Job Assistance | Ticket to fast-tracked career growth in Data Science" />
        <Cards1 heading="Data Analytic Courses" details="Job Assurance | Gain Data Analytics Expertise" />
        <Cards1 heading="Data Science With generative AI Courses Hinglish" details="Job Assistance | Ticket to fast-tracked career growth in Data Science" />

      </div>

      <h3 className="text-2xl mt-20 ml-24">Software Development Courses</h3>

      <div className="flex justify-between items-center gap-10 mx-24 pb-10">
        <Cards2 heading="Full Stack Development Course" details="Job Assurance | Gain Full Stack Development Expertise" />
        <Cards2 heading="DevOps and Cloud Computing Course" details="Master the art of streamline software development with out DevOps course" />
        <Cards2 heading="UI/UX Design Course" details="Job Assistance | Unlock the secrets of seamless user experience with pur UI/UX course" />

      </div>
      <div className="flex items-center font-semibold gap-44 mx-24 py-10 text-2xl">
        <Footer Footer_head="PW SKILLS" />
        <Footer Footer_head="Company" />
        <Footer Footer_head="Products" />
      </div>
     <div className="flex items-center gap-32 ml-24 mb-10">
     <div className="flex flex-col gap-2"> <Footer value={"support@pwskills.com"}/>
      <Footer value={"+91 6361388..."}/></div>
      <div  className="flex flex-col gap-2 ml-28"> <Footer value={"About Us"}/>
      <Footer value={"FAQ"}/>
      <Footer value={"Privacy policy"}/></div>
      <div  className="flex flex-col gap-2"> <Footer value={"Contact Us"}/>
      <Footer value={"Job assistance"}/>
      <Footer value={"Terms and Cindition"}/></div>
      <div className="flex flex-col gap-2"> <Footer value={"PEW Skill lab"}/>
      <Footer value={"Experience Portal"}/>
      <Footer value={"Hall Of fame"}/></div>
      <div  className="flex flex-col gap-2"> <Footer value={"Job portal"}/>
      <Footer value={"Become an affiliate"}/>
      <Footer value={"Blog"}/></div>
     </div>
    </>
  );
}

export default App;
