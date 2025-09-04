import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAdd }) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const modalRef = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate,
    });
  }
  function handleCancel() {}
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Check to add a value</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancel}
              className="text-stone-500 hover:text-stone-900 backgrou"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-600 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={desc} label="Description" textArea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
