import { useEffect, useState } from "react"
import Crime from "../components/Crime"

function Display() {
  const [crime, setCrime] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3000/crimes")
    .then(res => res.json())
    .then(data => setCrime(data))
    console.log(crime)
  },[])

  // console.log(books);
  return (
    <div className="flex flex-row gap-3 my-8">
      <div className="w-full">
      <div className="overflow-x-auto ">
        <table className="table gap-3">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="">User</th>
              <th className="p-1 px-6">Crimes</th>
              <th className="p-1">Parish</th>
              <th className="p-1">Mayor</th>
              <th className="p-1">Town</th>
              <th className="p-1">Fatalities</th>
              <th className="p-1">Solved crimes</th>
              <th className="p-1 px-6">Unsolved crimes</th>
              <th className="p-1 px-6">Money spent</th>
              <th className="p-1 px-6">Total</th>
              <th className="p-1 px-6">High fatalities</th>
              <th className="p-1 px-6">Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row --> */}
            {
              crime.map(crime => <Crime key={crime.id} crime={crime}></Crime>)
            }
            

          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Display