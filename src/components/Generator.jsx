import { WORKOUTS, SCHEMES } from "../utils/fitpulse";
import SectionWrapper from "./SectionWrapper";
import { useState } from "react";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const [path, setPath] = useState("Individual Plan");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <SectionWrapper
      header={"Generate Workout NOW!"}
      title={"Just complete the following steps↓"}>
      <Header
        index={"01"}
        title={"Pick your path"}
        description={"Select Workout Style"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPath(type);
              }}
              className={
                "bg-white border border-black rounded-lg py-3 transition-transform duration-300 ease-in-out hover:scale-110" +
                (type === path
                  ? "transition-transform duration-300 ease-in-out scale-110 font-bold"
                  : "")
              }
              key={typeIndex}>
              <p className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
                {type}
              </p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Set your focus"}
        description={"Define your muscle focus for today."}
      />
      <div className="bg-white  p-3 border border-solid flex flex-col rounded-lg">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text ">
          <p>Select Muscle Groups</p>
          <i className=" fa-solid fa-caret-down  absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text"></i>
        </button>
        {showModal && (
          <div className=" flex flex-col px-3 pb-3 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text ">
            { }
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Unleash Your Potential"}
        description={"Choose your ultimate goal."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-white border border-black rounded-lg py-3 transition-transform duration-300 ease-in-out hover:scale-110" +
                (scheme === goal
                  ? "transition-transform duration-300 ease-in-out scale-110 font-bold"
                  : "")
              }
              key={schemeIndex}>
              <p className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
                {scheme}
              </p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
