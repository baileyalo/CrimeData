import { useState, useEffect, useId } from "react";
import "./Create.css";
import { toast, ToastContainer } from "react-toastify";
import nextId from "react-id-generator";

import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';

const num = 300;
// const PARISHES = 14;

function CreateForm() {
  const [user, setUser] = useState("");
  const [parish, setParish] = useState("");
  const [mayor, setMayor] = useState("");
  const [town, setTown] = useState("");
  const [crimes, setCrimes] = useState("");
  const [fatalities, setFatalities] = useState("");
  const [sCrimes, setSCrimes] = useState("");
  const [uCrimes, setUCrimes] = useState("");
  const [money, setMoney] = useState("");
  const [total, setTotal] = useState("");
  const [highFatalities, setHighFatalities] = useState("");
  const [notes, setNotes] = useState("");
  const id = nextId();

  const getUnsolved = () => {
    const uSolved = crimes - sCrimes;
    setUCrimes(uSolved);
  };
  const getHighFatalities = () => {
    if (fatalities > num) {
      return true;
    } else {
      return false;
    }
  };

  const getTotal = () => {
    const sum = crimes + fatalities + sCrimes + uCrimes;
    setTotal(sum);
  };
  // const removeNewLineNotBookText = (str) => {
  //   str = str.toString();
  //   str = str.replace(/\r?\n|\r/g, "");
  //   // str = str.replace(/\r?\d|\r/g, "")
  //   str = str.replace(/[.,/#!$%^*=\-_`~()'"॥€]/g, "");
  //   // str = str.replace(/[a-zA-Z]/," ")
  //   return str;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newBookTitle = removeNewLineNotBookText(title);
    // const newBookAbstract = removeNewline(abstract);
    // const newBookText = removeNewline(bookText);
    // console.log({who,author,gender,birth,birthPlace,death,deathPlace});
    // console.log({title,publisher,publishDate,genre,newBookText});
    // console.log(newBookText);

    const data = {
      id: id,
      user: user,
      crimes: crimes,
      parish: parish,
      mayor: mayor,
      town: town,
      fatalities: fatalities,
      sCrimes: sCrimes,
      uCrimes: uCrimes,
      money: money,
      total: total,
      highFatalities: highFatalities,
      notes: notes,
    };

    postData(data);
  };

  const postData = (data) => {
    fetch("http://localhost:3000/crimes", {
      method: "POST", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const notify = () => toast.success("Successfull!!!");
        notify();
      })
      .catch((error) => {
        toast.error("Error:", error);
      });
  };

  useEffect(() => {
    if (crimes) {
      getUnsolved();
      getHighFatalities();
      getTotal();
    }
  }, []);
  return (
    <>
      <ToastContainer autoClose={4000} />

      <div className="form-container">
        <form onSubmit={handleSubmit} className="bg-slate-200">
          <label>
            <select
              className="select w-full max-w-xs "
              required
              name="User"
              onChange={(e) => setUser(e.target.value)}
            >
              <option disabled selected>
                User
              </option>
              <option>Mayor</option>
              <option>Parish Clerk</option>
              <option>Police</option>
            </select>
          </label>
          <div className="flex flex-col-2">
            <div className="mb-5">
              <label className="font-bold text-2xl">Parish:</label>
              <input
                className="w-40 h-5 focus:ring-2 focus:ring-primary"
                type="text"
                name="Parish"
                onChange={(e) => setParish(e.target.value)}
                required
              />
              <label className="font-bold text-2xl ">Mayor:</label>
              <input
                className="w-40 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="text"
                name="Mayor"
                onChange={(e) => setMayor(e.target.value)}
                required
              />

              <label className="font-bold text-2xl ">Major Town:</label>
              <input
                className="w-40 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="text"
                name="Town"
                onChange={(e) => setTown(e.target.value)}
              />
            </div>
          </div>

          <h2 className="text-2xl text-center bg-primary font-bold">
            Categories
          </h2>
          <div className="flex flex-col">
            <div className="mb-5 mt-5">
              <label className="font-bold text-2xl">Commited crimes:</label>
              <input
                className="w-10 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="number"
                name="crimes"
                onChange={(e) => setCrimes(e.target.value)}
                required
              />
              <label className="font-bold text-2xl">Fatalities:</label>
              <input
                name="fatalities"
                className="w-10 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="number"
                onChange={(e) => setFatalities(e.target.value)}
              />

              <label className="font-bold text-2xl">Solved crimes:</label>
              <input
                className="w-10 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="number"
                name="sCrimes"
                onChange={(e) => setSCrimes(e.target.value)}
              />
              {/* <label className="font-bold text-2xl">Unsolved crimes:</label>
              <input
                className="w-10 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="number"
                name="uCrimes"
                onChange={(e) => setUCrimes(e.target.value)}
              /> */}
              <label className="font-bold text-2xl">Money spent:</label>
              <input
                className="w-15 h-5 focus:ring-2 focus:ring-primary gap-2"
                type="number"
                name="money"
                onChange={(e) => setMoney(e.target.value)}
              />
            </div>
          </div>

          {/* <label>
            <select
              className="select w-full max-w-xs"
              required
              // onChange={(e) => setGenre(e.target.value)}
            >
              <option disabled selected>
                Genre
              </option>
              <option>horror</option>
              <option>sci-fi</option>
              <option>comedy</option>
              <option>romance</option>
              <option>detective</option>
              <option>biography</option>
              <option>war</option>
              <option></option>
            </select>
          </label> */}

          <label className="w-full">
            <h3 className="text-2xl">Notes: </h3>
            <textarea
              className="w-full"
              name="notes"
              cols="30"
              rows="10"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </label>

          {/* <label className="w-full">
            <h3 className="text-2xl">Book Text: </h3>
            <textarea
              className="w-full"
              name="Book text"
              cols="30"
              rows="10"
              // onChange={(e) => setBookText(e.target.value)}
              required
            ></textarea>
          </label> */}

          <button
            type="submit"
            className="button button-bg-disabled hover:bg-primary "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateForm;
