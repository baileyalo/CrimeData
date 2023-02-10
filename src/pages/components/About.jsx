const About = () => {
  return (
    <>
      <img className="w-[150px]" alt="logo" src="badge.png" />
      <div className="flex flex-row">
        <div className="ml-[200px] mr-[100px] p-5 border-4 border-primary-darkest rounded-lg ">
          <p className="mb-2 text-lg text-center font-bold">
            Jamaica Crimes Statistics Department
          </p>
          <p className="mb-1 text-md text-center font-normal">
            Kingston 9, Hope Street
          </p>
          <p className="mb-1 text-md text-center font-normal">
            Tel: 1 (876) 776-6540{" "}
          </p>
          <p className="mb-1 text-md text-center font-normal border-b-2 border-black">
            jatcrime@gmail.com{" "}
          </p>

          <div className="mt-2 text-center">
            <p className="text-md text-center font-medium	 ">
              For the past year, the crime rate in this country has been
              steadily increasing.
            </p>
            <p className="text-md text-center font-medium	 ">
              The majority of serious crimes that have been reported are
              robberies, shootings, kidnappings and stabbings.
            </p>
            <br />
            <p className="text-md text-center font-medium	 ">
              The mayors of each parish are the ones who should be tasked with
              controlling crime within their jurisdictions.
            </p>
            <p className="text-md text-center font-medium	 ">
              This website will provide statistics on the numerous crimes that
              occur in each parish across the country, <br />
              as well as the mayors contact informations and other crucial
              information.
            </p>
          </div>
        </div>
        <img className="w-[400px]" alt="logo" src="police.png" />
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

export default About;
