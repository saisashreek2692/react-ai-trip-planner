import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <img src="/logo.svg" alt="trip-planner-logo" />
        <div>
            <Button>Sign In</Button>
        </div>
      </div>
    </>
  );
}
