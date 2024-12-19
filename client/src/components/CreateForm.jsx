import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const CreateForm = () => {
  const { modalRef } = useAuth();
  const [userInput, setUserInput] = useState("");

  const onCreateForm = () => {
    console.log(userInput);
    onModalClose();
  };

  const onModalClose = () => {
    setUserInput("");
    modalRef.current.close();
  };

  return (
    <div>
      <dialog ref={modalRef} id="create-form" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="font-bold text-2xl">Create New Form</h2>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Write description for your form..."
            className="textarea textarea-bordered textarea-lg w-full max-w-lg mt-4"
          ></textarea>
          <div className="flex gap-2 my-3 justify-end">
            <button onClick={onModalClose} className="btn btn-error text-white">
              Cancel
            </button>
            <button onClick={onCreateForm} className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateForm;
