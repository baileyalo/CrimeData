import CreateForm from "./CreateForm";
import "./Create.css";

function Create() {
  return (
    <div>
      <img className="w-[150px]" alt="logo" src="badge.png" />
      <h1 className="text-4xl text-center font-bold">Enter Statistics</h1>
      <CreateForm />
    </div>
  );
}

export default Create;
