import CreateForm from "../components/CreateForm";
import { useAuth } from "../context/AuthContext";

const DashBoard = () => {
  const { openModal } = useAuth();
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl flex items-center justify-between">
        Dashboard
        <button onClick={openModal} className="btn btn-primary">
          Create Form
        </button>
      </h2>
      <CreateForm />
    </div>
  );
};

export default DashBoard;
