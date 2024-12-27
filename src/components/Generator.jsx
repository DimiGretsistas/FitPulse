import { WORKOUTS } from "../utils/fitpulse";
import SectionWrapper from "./SectionWrapper";

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
              className="bg-white border border-black rounded-lg py-3 transition-transform duration-300 ease-in-out hover:scale-110"
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
    </SectionWrapper>
  );
}
