import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function Hero() {
  const navigate = useNavigate();

  const getStartedBtnHandler = (e) => {
    e.preventDefault();
    navigate("/create-trip");
  };

  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-semibold text-[60px] text-center mt-16">
        <span className="bg-gradient-to-r from-cyan-500 via-emerald-400 to-sky-800 inline-block text-transparent bg-clip-text">
          Discover Your Next Adventure with AI:
        </span>
        Personalized at Your Fingertips.
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom itineries
        tailored to your interests and budget.
      </p>
      <Button onClick={getStartedBtnHandler}>
        Get Started, It&apos;s Free.
      </Button>
    </div>
  );
}
