import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function SingleCrime() {
  const {id} = useParams()
  const [crime, setCrime] = useState({})
  useEffect(()=>{
    fetch(`https://crime-stat-server.onrender.com/crimes/${id}`)
    .then(res => res.json())
    .then(data => setCrime(data))
  },[id])

  const {user,crimes,parish,mayor,town,fatalities,sCrimes,uCrimes,money,total,notes} = crime
  


  return (
    <div className='flex flex-col items-center '>
      {/* <h1>SingleBook</h1> */}

      <div className='w-4/5 mt-4'>
        <p className='font-bold space-x-5'>User:{user}</p>
        
        <div className='bg-gray-100 p-3 my-3 rounded-2xl'>
          <h1 className='text-primary text-xl'>Jurisdiction</h1>
          <p>Crimes: {crimes}</p>
          <p>Parish: {parish}</p>
          <p>Mayor: {mayor}</p>
          <p>Town: {town}</p>
          <p>Fatalities: {fatalities}</p>

        </div>

        <div className='bg-gray-200 p-3 my-3 rounded-2xl'>
          <h1 className='text-primary text-xl'>Statistics</h1>
          <p><span className='font-bold'>Solved crimes: </span>{sCrimes}</p>
          <p><span className='font-bold'>Unsolved crimes: </span>{uCrimes}</p>
          <p><span className='font-bold'>Money spent: </span>${money}</p>
          <p><span className='font-bold'>Total numbers: </span>{total}</p>
          <p className='bg-gray-100 p-2 m-3 rounded-xl'><span className='font-bold'>Notes: </span>{notes}</p>

        </div>
      </div>
    </div>
  )
}

export default SingleCrime