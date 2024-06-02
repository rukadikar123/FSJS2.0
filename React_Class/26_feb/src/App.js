import Cards from "./components2/Cards";
import Cards2 from "./components2/Cards2";
import Cards1 from "./components2/Cards1";
import Header from "./components2/Header";
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
   <Cards1 heading="Data Science With generative AI Courses" details="Job Assistance | Ticket to fast-tracked career growth in Data Science"/>
   <Cards1 heading="Data Analytic Courses" details="Job Assurance | Gain Data Analytics Expertise"/>
   <Cards1 heading="Data Science With generative AI Courses Hinglish" details="Job Assistance | Ticket to fast-tracked career growth in Data Science"/>
   <Cards2 heading="Full Stack Development Course" details="Job Assurance | Gain Full Stack Development Expertise"/>
   <Cards2 heading="DevOps and Cloud Computing Course" details="Master the art of streamline software development with out DevOps course"/>
   <Cards2 heading="UI/UX Design Course" details="Job Assistance | Unlock the secrets of seamless user experience with pur UI/UX course"/>
   </>
  );
}

export default App;
