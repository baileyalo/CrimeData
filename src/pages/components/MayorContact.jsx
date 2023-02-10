import { useState } from "react";
import "../create/Create.css";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';

const MayorContact = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    if (conFom) {
      setFormStatus("Send");
    } else {
      setFormStatus("Submitting...");
    }

    toast.success("Sent Successful", {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(conFom);
  };
  return (
    <>
      <ToastContainer autoClose={4000} />
      <img className="w-[150px]" alt="logo" src="badge.png" />
      <div className="flex flex-row justify-center ">
        <div className=" mt-auto border-4 border-primary-darkest rounded-lg">
          <p className="text-4xl text-center font-bold">Contact</p>
          <form onSubmit={onSubmit} className="items-center ">
            <div className="mb-2">
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="form-control w-[400px]  rounded-md border-2 border-black"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control border w-[400px] rounded-md border-2 border-black "
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message:
              </label>
              <textarea
                className="form-control borde w-[400px] rounded-md border-2 border-black h-[100px]"
                id="message"
                required
              />
            </div>
            <button className="btn btn-danger hover:bg-primary" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
        <div className="mt-[100px] ml-[50px]">
          <p className="mb-2 text-md text-center font-bold">
            Mayor: John Brown
          </p>
          <p className="mb-1 text-md text-center font-normal">
            Kingston 9, Hope Street
          </p>
          <p className="mb-1 text-md text-center font-normal">
            Tel: 1 (876) 776-6540{" "}
          </p>
          <p className="mb-1 text-md text-center font-normal">
            mayore@gmail.com{" "}
          </p>
        </div>
      </div>
    </>
  );
  //   const [who, setWho] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [birth, setBirth] = useState("");

  //   const handleSubmit = (e) => {

  //     const postData = (data) => {
  //       fetch("http://localhost:8000/stat", {
  //         method: "POST", // or 'PUT'
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(data),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const notify = () => toast.success("Successfull!!!");
  //           notify();
  //         })
  //         .catch((error) => {
  //           toast.error("Error:", error);
  //         });
  //     };

  //     return (
  //       <>
  //         <ToastContainer autoClose={4000} />
  //         <div className="form-container"></div>
  //       </>
  //     );
  //   };
};

export default MayorContact;
